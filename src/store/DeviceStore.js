import {makeAutoObservable} from 'mobx';

export default class DeviceStore{
    constructor(){
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Окна'}
        ]
        
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        
        this._devices = [
            {id: 1, name: 'S8', price: 5000, img: "", rating: 5},
            {id: 2, name: '12Pro', price: 10000, img: "", rating: 5},
            {id: 3, name: '13Pro', price: 13000, img: "", rating: 5},
            {id: 4, name: '14Pro', price: 14000, img: "", rating: 4}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    
    setTypes(types){
        this._types = types
    }
    
    setBrands(brands){
        this._brands = brands
    }
    
    setDevices(devices){
        this._devices = devices
    }
    
    setSelectedType(type){
        this._selectedType = type
    }
    
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    
    get types(){
        return this._types
    }
    
    get brands(){
        return this._brands
    }
    
    get devices(){
        return this._devices
    }
    
    get selectedType(){
        return this._selectedType
    }
    
    get selectedBrand(){
        return this._selectedBrand
    }
}
