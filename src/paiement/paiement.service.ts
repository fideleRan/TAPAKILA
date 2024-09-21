import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaiementDto } from './dto/create-paiement.dto';
import { UpdatePaiementDto } from './dto/update-paiement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paiement } from './entities/paiement.entity';
import { Repository } from 'typeorm';
import { BonCommande } from 'src/bon_commande/entities/bon_commande.entity';

@Injectable()
export class PaiementService {
  constructor(
    @InjectRepository(Paiement) private paiementRepo:Repository<Paiement>,
    @InjectRepository(BonCommande) private BCRepo:Repository<BonCommande>,

  ){}
  async create(idBC:number,createPaiementDto: CreatePaiementDto) {
    const verifBC = await this.BCRepo.findOne({where:{id:idBC}})
    if(!verifBC) throw new NotFoundException('BC not found')
    
    //Numtransaction
    let randomNumTrans =''
    const character = "0123456789"
    for (let i = 0; i < 5; i++) {
      const random = Math.floor(Math.random()*character.length)
      randomNumTrans+=character.charAt(random)
    }
    
    const data = this.paiementRepo.create({
      ...createPaiementDto,
      NumTransaction:randomNumTrans,
      Montant:verifBC.TotalPrice,
      Bon_Commande:verifBC
    })
    

    return await this.paiementRepo.save(data);
  }

  findAll() {
    return this.paiementRepo.find();
  }

  async findOne(id: number) {
    const verifPaiement = await this.paiementRepo.findOne({where:{id}})
    if(!verifPaiement) throw new NotFoundException('Cette payement n existe pas')
    return await this.paiementRepo.findOneBy({id});
  }

  findOneUser(id: number) {
    return `This action returns a #${id} paiement`;
  }

  async update(id: number, updatePaiementDto: UpdatePaiementDto) {
    const verifPaiement = await this.paiementRepo.findOne({where:{id}})
    if(!verifPaiement) throw new NotFoundException('Cette payement n existe pas')

    const data = this.paiementRepo.create({
      ...updatePaiementDto,
      Status:'Payé'
    })
    await this.paiementRepo.update(id,data)
    
    return{
      message:'Status à jours'
    } 
  }

  remove(id: number) {
    return this.paiementRepo.delete(id);
  }
}
