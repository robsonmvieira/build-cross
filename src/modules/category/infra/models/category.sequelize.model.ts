// import { Model } from 'sequelize'
import { Column, DataType, PrimaryKey, Model, Table } from 'sequelize-typescript';

type CategoryModelProperties = {
   id: string;
   name: string;
   is_active: boolean;
   description?: string;
   created_at: Date;
   updated_at: Date;
}

@Table({tableName: 'categories', timestamps: false})
export class CategorySequelizeModel extends Model<CategoryModelProperties> {
  @PrimaryKey
  @Column({type: DataType.UUID })
  declare id: string;

  @Column({type: DataType.STRING(200), allowNull: false})
  declare name: string;
 
  @Column({type: DataType.BOOLEAN, allowNull: false})
  declare is_active: boolean;

  @Column({type: DataType.TEXT})
  declare description: string | null;
  
  @Column({type: DataType.DATE, allowNull: false})
  declare created_at: Date;  
  
  @Column({type: DataType.DATE, allowNull: false})
  declare updated_at: Date;
}