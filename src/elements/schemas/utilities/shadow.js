import {OptionFragment} from "../option-fragment"

let utilShadowSchema = {
  label:'Shadow',
  group:'utilities',
  widget:'OpSelect',
  defaultValue:'',
  list:{
    'shadow-none':'No shadow',
    'shadow-sm':'Small',
    'shadow':'Regular',
    'shadow-lg':'Larger',
  },
}

class UtilShadow extends OptionFragment{
  constructor(){
    super()
    this.schema = Object.assign({}, utilShadowSchema)

    this.metaFragment = '' 

    this.fieldName = 'utilShadow'
  }

  copyMeta(from, to){
    to.utilShadow = from.utilShadow
  }

  toViewModel(model, meta){
    model.classList.add(meta[this.fieldName])
  }
}

var addonUtilShadow = (node)=>{
  let utilShadow = new UtilShadow
  utilShadow.addon(node)
  return utilShadow
}

export {addonUtilShadow}
