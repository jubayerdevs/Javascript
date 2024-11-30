const ena ={
    bus: 'ena paribahan',
    busCode: 'PW',
    ticket: [],
    booking(seatNumber, name){
        console.log(`${name} booked a seat on ${this.bus} and ticket is ${this.busCode} and my seat number is ${seatNumber}`)
    
        //ticket: [] push in array
    this.ticket.push({
      ticketInfo: `${this.busCode} and ${seatNumber} and my name is ${name}`
    })
 }
}

//ena.booking('B2', 'Jubayer')

const hanif = {
    bus: 'hanif paribahan',
    busCode: 'WQ',
    ticket:[],
}

const ss_paribahan = {
    bus: 'ss paribahan',
    busCode: 'WQ',
    ticket:[],
}

ena.booking.call(hanif, 'V2', 'Ahmed')
ena.booking.call(ss_paribahan, 'V2', 'Ahmed')
ena.booking.apply(hanif, ['V2', 'Ahmed'])

const bindd = ena.booking.bind(ena)
//bind('C2')

const student1 = {
    name: 'mahfuz',
    termExam(score){
        console.log(`${this.name} scored ${score} in an exam`)
    }
}

const student2 = {
    name: `shanto`,
}

//const result = student1.termExam.bind(student2, )