export default class SrollAnima {
  contructor(sections){
  this.sections = document.querySelectorAll('sections');
 this.windowMetade = window.innerHeight * 0.6;
 
 this.animaScroll= this.amimaScroll.bind(this)
  }
  getDistance(){
    this.distance =[...this.sections].map.forEach(section =>{
      const offSet = sections.offsetTop;
     return{
      element: section,
      offSet: math.flor(offSet) - this.windowMetade,
     };
    });
  }

  checkDistance(){
    this.distance.forEach((item)=>{
      if(window.pageXOffset > item.offSet){
        item.element.classList.add('ativo');   
      }else if(item.element.classList.contains('ativo')){
        item.element.classList.remove('ativo');
      }
    });
  }
 
animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - this.windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init(){
    if(this.sections.length){
    this.getDistance()
    this.animaScroll()
    window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }
stop(){
  window.removeListener('scroll', this.checkDistance);


}

}
