import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, JoinColumn, OneToOne } from 'typeorm';
import { ProductModel } from './Products';
import { CategoriesModel } from './Categories';
import { OrdersModel } from './Orders';
import { AdicionalesModel } from './ProductosAdicionales';
import { UserModel } from './User';
import { AddressModel } from './Address';

@Entity({name:"Branch"})

export class BranchModel {

    @PrimaryGeneratedColumn()
    id_branch:number;

    @Column()
    name:string;

    @Column()
    address:string;

    @Column()
    opening:string;
    @Column()
    closing:string;
    @Column()
    phone:string;

    @Column({default:0.00000, type:'double'})
    latitud:number;


    @Column({default:0.0000, type:'double'})
    longitud:number;

    @Column({nullable:true})
    shippingCost:number;

    @Column({nullable:true})
    minimumCost:number;

    @Column()
    deliveryType:string;
 
    @Column()
    paymentMethod:string;

    @Column({default:true})
    online:boolean
    
    @Column({type:"float"})
    rate:number;

    @Column({nullable:true})
    image:string;

    @Column({default:true})
    active:boolean;

    @OneToMany(type => ProductModel, (products) => products.branch)
    products: ProductModel[];

    @OneToMany(type => CategoriesModel, (category) => category.id_branch)
    categories: CategoriesModel[];

    @OneToMany(type => AdicionalesModel, (adicionales) => adicionales.branch)
    adicionales: AdicionalesModel[];

    @OneToMany(type => UserModel, (user) => user.branch)
    user: UserModel[];

}
