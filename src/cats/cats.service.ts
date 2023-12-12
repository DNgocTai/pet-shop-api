import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './schema/cats.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}
  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = await this.catModel.create(createCatDto);
    return createdCat;
  }

  async findAll(): Promise<Cat[]> {
    const findAll = await this.catModel.find();
    return findAll;
  }

  async findOne(id: string): Promise<Cat> {
    const cat = this.catModel.findOne({ _id: id });
    return cat;
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    const updatedCat = await this.catModel.findOneAndUpdate(
      { _id: id },
      updateCatDto,
    );
    return this.catModel.findOne({ _id: id });
  }

  async remove(id: string) {
    const deletedCat = await this.catModel.findOneAndDelete({ _id: id });
    return deletedCat;
  }
}
