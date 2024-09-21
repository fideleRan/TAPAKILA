import { Event } from "src/event/entities/event.entity"
import { User } from "src/USER/entities/user.entity"

export class CreateCommentaireDto {
    Message:string
    Type:boolean
    Event:Event | number
    User:User | number
}
