const data = [
  { 
    src: 'https://picsum.photos/200/300?random=1',
    id: 1,
    first_name: "Sophronia",
    last_name: "Stoddart",
    email: "sstoddart0@howstuffworks.com",
    gender: "Female",
    ip_address: "80.215.124.45",
  },
  { 
    src: 'https://picsum.photos/200/300?random=2',
    id: 2,
    first_name: "Elie",
    last_name: "Ashenhurst",
    email: "eashenhurst1@ameblo.jp",
    gender: "Female",
    ip_address: "68.37.253.68",
  },
  { 
    src: 'https://picsum.photos/200/300?random=3',
    id: 3,
    first_name: "Elianore",
    last_name: "Eaddy",
    email: "eeaddy2@chronoengine.com",
    gender: "Female",
    ip_address: "67.148.137.105",
  },
  { 
    src: 'https://picsum.photos/200/300?random=4',
    id: 4,
    first_name: "Brittne",
    last_name: "Heditch",
    email: "bheditch3@businessweek.com",
    gender: "Female",
    ip_address: "100.224.120.91",
  },
  { 
    src: 'https://picsum.photos/200/300?random=5',
    id: 5,
    first_name: "Harman",
    last_name: "Mashal",
    email: "hmashal4@sakura.ne.jp",
    gender: "Male",
    ip_address: "135.116.148.60",
  },
  { 
    src: 'https://picsum.photos/200/300?random=6',
    id: 6,
    first_name: "Flore",
    last_name: "Zappel",
    email: "fzappel5@tripod.com",
    gender: "Female",
    ip_address: "78.191.118.28",
  },
  { 
    src: 'https://picsum.photos/200/300?random=7',
    id: 7,
    first_name: "Angelina",
    last_name: "Manneville",
    email: "amanneville6@lycos.com",
    gender: "Bigender",
    ip_address: "176.253.242.10",
  },
  { 
    src: 'https://picsum.photos/200/300?random=8',
    id: 8,
    first_name: "Merilyn",
    last_name: "Marusik",
    email: "mmarusik7@1und1.de",
    gender: "Female",
    ip_address: "221.137.214.47",
  },
  { 
    src: 'https://picsum.photos/200/300?random=9',
    id: 9,
    first_name: "Jeddy",
    last_name: "Brunn",
    email: "jbrunn8@umn.edu",
    gender: "Male",
    ip_address: "9.189.41.129",
  },
  { 
    src: 'https://picsum.photos/200/300?random=10',
    id: 10,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
  { 
    src: 'https://picsum.photos/200/300?random=11',
    id: 11,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
];

//images
const usersImg = document.querySelectorAll('.card-img');
let card_img1 = usersImg[0];
let card_img2 = usersImg[1];
let card_img3 = usersImg[2];
let card_img4 = usersImg[3];
let card_img5 = usersImg[4];
let card_img6 = usersImg[5];
let card_img7 = usersImg[6];
let card_img8 = usersImg[7];
let card_img9 = usersImg[8];
let card_img10 = usersImg[9];
let card_img11 = usersImg[10];

card_img1.src = data[0].src;
card_img2.src = data[1].src;
card_img3.src = data[2].src;
card_img4.src = data[3].src;
card_img5.src = data[4].src;
card_img6.src = data[5].src;
card_img7.src = data[6].src;
card_img8.src = data[7].src;
card_img9.src = data[8].src;
card_img10.src = data[9].src;
card_img11.src = data[10].src;

//names
const usersName = document.querySelectorAll('.user__fullname');
let user__fullname1  = usersName[0];
let user__fullname2  = usersName[1];
let user__fullname3  = usersName[2];
let user__fullname4  = usersName[3];
let user__fullname5  = usersName[4];
let user__fullname6  = usersName[5];
let user__fullname7  = usersName[6];
let user__fullname8  = usersName[7];
let user__fullname9  = usersName[8];
let user__fullname10 = usersName[9];
let user__fullname11 = usersName[10];


user__fullname1.textContent = data[0].first_name + ' ' + data[0].last_name 
user__fullname2.textContent = data[1].first_name + ' ' + data[1].last_name 
user__fullname3.textContent = data[2].first_name + ' ' + data[2].last_name 
user__fullname4.textContent = data[3].first_name + ' ' + data[3].last_name 
user__fullname5.textContent = data[4].first_name + ' ' + data[4].last_name 
user__fullname6.textContent = data[5].first_name + ' ' + data[5].last_name 
user__fullname7.textContent = data[6].first_name + ' ' + data[6].last_name 
user__fullname8.textContent = data[7].first_name + ' ' + data[7].last_name 
user__fullname9.textContent = data[8].first_name + ' ' + data[8].last_name 
user__fullname10.textContent = data[9].first_name + ' ' + data[9].last_name 
user__fullname11.textContent = data[10].first_name + ' ' + data[10].last_name 

//emails
const usersEmail = document.querySelectorAll('.user__email');
let user__email1  = usersEmail[0];
let user__email2  = usersEmail[1];
let user__email3  = usersEmail[2];
let user__email4  = usersEmail[3];
let user__email5  = usersEmail[4];
let user__email6  = usersEmail[5];
let user__email7  = usersEmail[6];
let user__email8  = usersEmail[7];
let user__email9  = usersEmail[8];
let user__email10 = usersEmail[9];
let user__email11 = usersEmail[10];


user__email1.textContent = data[0].email;
user__email2.textContent = data[1].email;
user__email3.textContent = data[2].email;
user__email4.textContent = data[3].email; 
user__email5.textContent = data[4].email;
user__email6.textContent = data[5].email;
user__email7.textContent = data[6].email; 
user__email8.textContent = data[7].email;
user__email9.textContent = data[8].email;
user__email10.textContent = data[9].email;
user__email11.textContent = data[10].email;

//genders
const usersGender = document.querySelectorAll('.user__gender');
let user__gender1  = usersGender[0];
let user__gender2  = usersGender[1];
let user__gender3  = usersGender[2];
let user__gender4  = usersGender[3];
let user__gender5  = usersGender[4];
let user__gender6  = usersGender[5];
let user__gender7  = usersGender[6];
let user__gender8  = usersGender[7];
let user__gender9  = usersGender[8];
let user__gender10 = usersGender[9];
let user__gender11 = usersGender[10];

user__gender1.textContent = data[0].gender;
user__gender2.textContent = data[1].gender;
user__gender3.textContent = data[2].gender;
user__gender4.textContent = data[3].gender; 
user__gender5.textContent = data[4].gender;
user__gender6.textContent = data[5].gender;
user__gender7.textContent = data[6].gender; 
user__gender8.textContent = data[7].gender;
user__gender9.textContent = data[8].gender;
user__gender10.textContent = data[9].gender;
user__gender11.textContent = data[10].gender;

//addresses
const usersAdress = document.querySelectorAll('.user__address');
let user_address1  = usersAdress[0];
let user_address2  = usersAdress[1];
let user_address3  = usersAdress[2];
let user_address4  = usersAdress[3];
let user_address5  = usersAdress[4];
let user_address6  = usersAdress[5];
let user_address7  = usersAdress[6];
let user_address8  = usersAdress[7];
let user_address9  = usersAdress[8];
let user_address10 = usersAdress[9];
let user_address11 = usersAdress[10];

user_address1.textContent = data[0].ip_address;
user_address2.textContent = data[1].ip_address;
user_address3.textContent = data[2].ip_address;
user_address4.textContent = data[3].ip_address; 
user_address5.textContent = data[4].ip_address;
user_address6.textContent = data[5].ip_address;
user_address7.textContent = data[6].ip_address; 
user_address8.textContent = data[7].ip_address;
user_address9.textContent = data[8].ip_address;
user_address10.textContent = data[9].ip_address;
user_address11.textContent = data[10].ip_address;