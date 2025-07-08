const user = {
    name: prompt("Adınız: "),
    age: prompt("Yaşınız: "),
    job: prompt("Mesleğiniz: ")
};

console.log("Kullanıcı bilgileri: ", user);

let cart = [];

function addProductToCart(){
    const name = prompt("Ürün adı:");
    const price = parseFloat(prompt("Ürün fiyatı"));

    if(!name || isNaN(price)){
        alert("Hatalı giriş");
        return;
    }

    cart.push({name, price});
    console.log(`${name} sepete eklendi`);
}

function listCart(){
    if(cart.length === 0){
        console.log("Sepet boş");
        return;
    }

    console.log("Sepetteki ürünler: ");
    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.price.toFixed(2)} TL`);
    });
}

function calculateTotal(){
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log(`Toplam sepet: ${total.toFixed(2)} TL`);
}

function removeProduct(){
    listCart();
    const productName = prompt("Silmek istediğiniz ürünün adı: ");
    const index = cart.findIndex(item => item.name.toLowerCase() === productName.toLowerCase());

    if(index !== -1){
        const removed = cart.splice(index, 1)[0];
        console.log(`${removed.name} sepetten çıkarıldı.`);
    } else {
        console.log("Bu ürün sepette yok.");
    }
}


let adding = true;
while (adding) {
    addProductToCart();
    const more = prompt("Başka ürün eklemek ister misin? (evet/hayır)").toLowerCase();
    if(more !== "evet") adding = false;
}


listCart();
calculateTotal();


const remove = prompt("Bir ürün çıkarmak ister misin? (evet/hayır)").toLowerCase();
if (remove === "evet") {
    removeProduct();
    listCart();
    calculateTotal();
}

console.log("Alışverişiniz tamamlandı 🎉");
