import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLigneCommandeDto } from './dto/create-ligne_commande.dto';
import { UpdateLigneCommandeDto } from './dto/update-ligne_commande.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BonCommande } from 'src/bon_commande/entities/bon_commande.entity';
import { Repository } from 'typeorm';
import { LigneCommande } from './entities/ligne_commande.entity';
import { TypeBillet } from 'src/type-billet/entities/type-billet.entity';

@Injectable()
export class LigneCommandeService {
  constructor(
    @InjectRepository(LigneCommande) private lcRepo:Repository<LigneCommande>,
    @InjectRepository(BonCommande) private bcRepo:Repository<BonCommande>,
    @InjectRepository(TypeBillet) private tbRepo:Repository<TypeBillet>
  ){}
  async create(idBC:number,idTypeBillet:number, createLigneCommandeDto: CreateLigneCommandeDto) {
    const verifBC = await this.bcRepo.findOne({where:{id:idBC}})
    if(!verifBC) throw new NotFoundException('BC not found')

    const verifTB = await this.tbRepo.findOne({where:{id:idTypeBillet}})
    if(!verifTB) throw new NotFoundException('TypeB not found')
    
    const nameB = verifTB.Name
    const nbB = +createLigneCommandeDto.nbBillet
    const unitPrice = +verifTB.Price

    const dataLC = this.lcRepo.create({
      ...createLigneCommandeDto,
      nameBillet:nameB,
      nbBillet:nbB,
      pu:unitPrice,
      montant:unitPrice*nbB,
      Bon_Commande:verifBC,
      Type_Billet:verifTB
    })
  
    await this.lcRepo.save(dataLC)
    await this.bcRepo.update(idBC,{TotalPrice:unitPrice*nbB})

    return {status:200, message:'Ligne de commande ajouté'};
  }

  findAll() {
    return this.lcRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ligneCommande`;
  }

  async update(id: number, updateLigneCommandeDto: UpdateLigneCommandeDto) {
    const verifLC = await this.lcRepo.findOne({where:{id}})
    if(!verifLC) throw new NotFoundException('Row not found')

    const dataToUpdate = this.lcRepo.create({
      ...updateLigneCommandeDto,
      nbBillet:updateLigneCommandeDto.nbBillet
    })
    await this.lcRepo.update(id, dataToUpdate)
    return {status:200, message:"Nb de billet à jours"};
  }

  async remove(id: number) {
    const verifLC = await this.lcRepo.findOne({where:{id}})
    if(!verifLC) throw new NotFoundException('Row not found')
    await this.lcRepo.delete(id)
    return {status:200, message:"Row deleted"};
  }
}
