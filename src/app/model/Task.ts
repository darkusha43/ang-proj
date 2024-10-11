import { Category } from "./Category"
import { Priority } from "./Priority"

export class Task{
    id: number
    title: string
    complited: boolean
    priority?:  Priority
    date?: Date
    categoty?: Category
constructor(id: number, title: string, complited: boolean, priority?: Priority, date?: Date, category?: Category){
    this.id = id
    this.title = title
    this.categoty = category
    this.complited = complited
    this.date = date
}
}