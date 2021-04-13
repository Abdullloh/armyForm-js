function myFunction() {
    
    let isActive = confirm('Admin bilan telfonda gaplashdizmi');
    let field = prompt("Qaysi dasturlash sohasini o'rganmoqchisiz");
        switch(field) {
        case 'Front end':
        case 'Back end':
        case 'UX design':

        alert('Ajoyib');
        break;
        case 'Android developer':
        case 'Python':  
        alert('Bizda bunday kurs mavjud emas');
        break;
        default:
        alert('Kursni tanglang')
  }
}