import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entity/user.entity";
import { CreateUserParams, UpdateUserParams } from "./types";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) { }

    getUser() {
        return this.userRepository.find();
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({...userDetails});
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails })
    }

    deleteUser(id: number) {
        return this.userRepository.delete(id);
    }
}