import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';
@Table
export class TShirt extends Model<TShirt> {
@Column
 color: string;
@Column
 size: string;
@Column
 gender: string;
@Column 
 quantity: number;
@CreatedAt
 @Column
 createdAt: Date;
@UpdatedAt
 @Column
 updatedAt: Date;
}