import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { DeliveryManModel } from './DeliveryMan';
import { BranchModel } from './Branch';

@Entity({name:"Orders"})

export class OrdersModel {

    @PrimaryGeneratedColumn()
    id_order:number;

    @Column({type:"date", nullable:true})
    date:string;
    
    @Column({type:"text", nullable:true})
    products:string

    @Column({type:"text"})
    address:string

    @Column({type:"float"})
    subtotal:number

    @Column({type:"float"})
    total:number

    @Column({type:"boolean", default:false, nullable:true})
    accepted:boolean

    @Column({type:"boolean", default:false, nullable:true})
    cancelado:boolean

    @Column({type:"boolean", default:false, nullable:true})
    prepared:boolean

    @Column({type:"boolean", default:false, nullable:true})
    ready:boolean

    @Column({type:"boolean", default:false, nullable:true})
    on_way:boolean

    @Column({type:"boolean", default:false, nullable:true})
    finalized:boolean

    @Column({type:"boolean", default:false, nullable:true})
    ordena_recoje:boolean

    @Column({type:"varchar", length:50})
    payment_type:boolean

    @Column({type:"boolean", default:false, nullable:true})
    delivery_assigbed:boolean

    @Column({type:"varchar", length:50})
    pin:string

    @Column({type:"boolean", default:false, nullable:true})
    verified_pin:boolean

    @Column({nullable: true, unique: false})
    @OneToOne(type => DeliveryManModel, {
        eager: true,
        onDelete: "CASCADE",
        onUpdate:"CASCADE"
    })
    @JoinColumn({name:"id_delivery"})
    id_delivery: DeliveryManModel;

    @Column({nullable: false})
    @OneToOne(type => BranchModel, {
        eager: true,
    })
    @JoinColumn({name:"id_branch"})
    id_branch: BranchModel;

}
