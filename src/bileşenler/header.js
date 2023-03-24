import { createEvent } from "@testing-library/dom"

const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

   const Headerdiv = document.createElement("div")
   Headerdiv.setAttribute("class" , "header") 

   const span = document.createElement("span")
   span.setAttribute("class" , "date")
   span.textContent = tarih
   Headerdiv.appendChild(span)
   
   const h1baslik = document.createElement("h1")
   h1baslik.textContent = baslik
   Headerdiv.appendChild(h1baslik)

   const span1 = document.createElement("span")
   span1.setAttribute("class" , "temp")
   span1.textContent = yazi
   Headerdiv.appendChild(span1)
  
  return Headerdiv

}

const headerEkleyici = (secici) => {


  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

const secicidom = document.querySelector(secici)
const headercb = Header("Teknoloji Zamanı" , "24/Mart/2023" , "Sağdaki Yazı")
secicidom.appendChild(headercb)
}

export { Header, headerEkleyici }
