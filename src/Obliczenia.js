export const SaatyPewnosc = (liczbaZSuwaka) => {
    if (liczbaZSuwaka >=0 && liczbaZSuwaka <=10) {
        return [{wartosc: 9, pewnosc: 1}];
    } 
    if (liczbaZSuwaka > 10 && liczbaZSuwaka < 20) {
        return [{wartosc: 9, pewnosc: (20-liczbaZSuwaka)/10},{wartosc: 7, pewnosc: (liczbaZSuwaka-10)/10}];
    }
    if (liczbaZSuwaka >= 20 && liczbaZSuwaka <= 30) {
        return [{wartosc: 7, pewnosc: 1}];
    }
    if (liczbaZSuwaka > 30 && liczbaZSuwaka < 40) {
        return [{wartosc: 7, pewnosc: (40-liczbaZSuwaka)/10},{wartosc: 5, pewnosc: (liczbaZSuwaka-30)/10}];
    }
    if (liczbaZSuwaka >= 40 && liczbaZSuwaka <= 50) {
        return [{wartosc: 5, pewnosc: 1}];
    }
    if (liczbaZSuwaka > 50 && liczbaZSuwaka < 60) {
        return [{wartosc: 5, pewnosc: (60-liczbaZSuwaka)/10},{wartosc: 3, pewnosc: (liczbaZSuwaka-50)/10}];
    }
    if (liczbaZSuwaka >= 60 && liczbaZSuwaka <= 70) {
        return [{wartosc: 3, pewnosc: 1}];
    }
    if (liczbaZSuwaka > 70 && liczbaZSuwaka < 80) {
        return [{wartosc: 3, pewnosc: (80-liczbaZSuwaka)/10},{wartosc: 1, pewnosc: (liczbaZSuwaka-70)/10}];
    }
    if (liczbaZSuwaka >= 80 && liczbaZSuwaka <= 90) {
        return [{wartosc: 1, pewnosc: 1}];
    }
    if (liczbaZSuwaka > 90 && liczbaZSuwaka < 100) {
        return [{wartosc: 1, pewnosc: (100-liczbaZSuwaka)/10},{wartosc: 1/3, pewnosc: (liczbaZSuwaka-90)/10}];
    }
    if (liczbaZSuwaka >= 100 && liczbaZSuwaka <= 110) {
        return [{wartosc: 1/3, pewnosc: 1}];
    }
    if (liczbaZSuwaka > 110 && liczbaZSuwaka < 120) {
        return [{wartosc: 1/3, pewnosc: (120-liczbaZSuwaka)/10},{wartosc: 1/5, pewnosc: (liczbaZSuwaka-110)/10}];
    }
    if (liczbaZSuwaka >= 120 && liczbaZSuwaka <= 130) {
        return [{wartosc: 1/5, pewnosc: 1}];
    }
    if (liczbaZSuwaka > 130 && liczbaZSuwaka < 140) {
        return [{wartosc: 1/5, pewnosc: (140-liczbaZSuwaka)/10},{wartosc:1/7, pewnosc: (liczbaZSuwaka-130)/10}];
    }
    if (liczbaZSuwaka >= 140 && liczbaZSuwaka <= 150) {
        return [{wartosc: 1/7, pewnosc: 1}];
    }
    if (liczbaZSuwaka > 150 && liczbaZSuwaka < 160) {
        return [{wartosc: 1/7, pewnosc: (160-liczbaZSuwaka)/10},{wartosc:1/9, pewnosc: (liczbaZSuwaka-150)/10}];
    }
    if (liczbaZSuwaka >= 160 && liczbaZSuwaka <= 170) {
        return [{wartosc: 1/9, pewnosc: 1}];
    }
}