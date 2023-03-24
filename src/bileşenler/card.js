import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
const carddiv = document.createElement("div")
carddiv.classList.add("card")

const headlinediv = document.createElement("div")
headlinediv.classList.add("headline")
headlinediv.textContent = makale.anabaslik
carddiv.appendChild(headlinediv)


const authordiv= document.createElement("div")
authordiv.classList.add("author")
carddiv.appendChild(authordiv)

const imgcont= document.createElement("div")
imgcont.classList.add("img-container")
authordiv.appendChild(imgcont)

const imgsrc= document.createElement("img")
imgsrc.setAttribute("src",makale.yazarFoto)
//imgsrc.src="URL"
imgcont.appendChild(imgsrc)

const sp=document.createElement("span")
sp.textContent = `${makale.yazarAdi} tarafından`;
authordiv.appendChild(sp)
   
carddiv.addEventListener("click", function(event){console.log (headlinediv.textContent) })

return carddiv;
}



const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const seciciCardDOM = document.querySelector(secici);
  axios
    .get("http://localhost:5001/api/makaleler")
    .then(function (response) {
      // handle success

      for (let i in response.data.makaleler) {
        response.data.makaleler[i].map((secilenMakale) => {
          seciciCardDOM.append(Card(secilenMakale));
        });
      }

      console.log(response);
      console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};


export { Card, cardEkleyici }
