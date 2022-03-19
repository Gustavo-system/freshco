import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ProductModel } from './Products';
import { CategoriesModel } from './Categories';

@Entity({name:"Branch"})

export class BranchModel {

    @PrimaryGeneratedColumn()
    id_branch:number;

    @Column()
    name:string;

    @Column()
    address:string;
    
    @Column({nullable:true})
    shippingCost:number;

    @Column({nullable:true})
    minimumCost:number

    @Column()
    deliveryType:string

    @Column()
    paymentMethod:string

    @Column({default:true})
    online:boolean

    @Column({nullable:true})
    image:string

    @OneToMany(type => ProductModel, (products) => products.branch)
    products: ProductModel[];

    @OneToMany(type => CategoriesModel, (category) => category.id_branch)
    categories: CategoriesModel[];

}
