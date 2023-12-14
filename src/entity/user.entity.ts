import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users'})
export class UserEntity {

    @PrimaryGeneratedColumn({ type: 'bigint'})
    id:number;

    @Column({ unique: true})
    username: string;

    @Column()
    password: string;

    @Column({ nullable: true})
    authStrategy: string;
}