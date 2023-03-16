import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository : Repository<User>
    ){
        this.userRepository = userRepository;
    }

    async signUp(authCredentialsDto: AuthCredentialsDto) : Promise<void>{
        const {username, password} = authCredentialsDto;

        const salt = await bcrypt.genSalt();

        console.log("salt ", salt);
        const user = new User();
        user.username = username;
        user.password = await bcrypt.hash(password, salt);
        user.salt = salt;
        try{
            await user.save();
        } catch(error) {
            if(error.code == "23505") {
                throw new ConflictException("Username Already Exists");
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async signIn(authCredentialsDto: AuthCredentialsDto) {
        const {username, password} = authCredentialsDto;
        const user = await this.userRepository.findOneBy({username});

        if(user && await user.validateUserPassword(password)){
            return username;
        } else{
            throw new UnauthorizedException("Invalid Credentials");
        }
    }
}
