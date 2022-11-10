import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";


@Entity({name: 'tb_usuario'})
export class Usuario{
    
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome: string

    @ApiProperty()
    @IsEmail()
    @Column({length: 255, nullable: false})
    usuario: string

    @ApiProperty()
    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    senha: string

    @ApiProperty()
    @Column({length: 5000})
    foto: string

    @ApiProperty({type:() => Postagem})
    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    postagem: Postagem[]

}