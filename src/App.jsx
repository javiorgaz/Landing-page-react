import Card from "./components/Card"
import JumboTron from "./components/Jumbotron"
import NavBar from "./components/NavBar"

function App() {
  
  const razerV3Pro = "https://assets3.razerzone.com/r87LHu8yGOlblVrHuF120jc2cXg=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh08%2Fh61%2F9765618188318%2Fviper-v3-pro-black-500x500.png"
  const razerBasilik = "https://assets3.razerzone.com/wpFuFBjy3QmPGbDiWItT2Ve5HWI=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5a%2Fh1c%2F9821720576030%2Fbasilisk-v3-pro-35k-500x500.png"
  const razerBlackWidow = "https://assets3.razerzone.com/MpMMmm54sDjwa6yiz04pJu1452c=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fhe7%2Fh76%2F9815507599390%2Fbw-v4-pro-75-500x500.png"
  const razerBarracuda = "https://assets3.razerzone.com/Dfj9heASNwFpgzk6AUKO6nb1ug0=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh8e%2Fh29%2F9833324937246%2Fbarracuda-x-chroma-black-500x500.png"
  const razerFujin = "https://assets3.razerzone.com/SiLJVnrEXfEQJIeCkzbvLdtSBV0=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fheb%2Fh1f%2F9660298133534%2Ffujin-500x500.png"
  const razerWolverine = "https://assets3.razerzone.com/foO8E9RIb6ghTpuc_8XeqJjPOsA=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh2f%2Fh9d%2F9809965056030%2Fwolverine-v3-pro-500x500.png"


  return (
    <div>
      <NavBar/>
      <JumboTron/>
      <div className="bg-secondary mx-2">
        <div className="container">
          <div className="row">
            <div className="col-3 mt-4"><Card title="Razer V3 PRO" image={razerV3Pro} description = "Ultra-lightweight Wireless Symmetrical Esports Mouse" precio = "80"/></div>
            <div className="col-3 mt-4"> <Card title="Razer Basilik" image={razerBasilik} description = "Fully Customizable Wireless Ergonomic RGB Gaming Mouse" precio ="60"/></div>
            <div className="col-3 mt-4"> <Card title="Razer Black Widow" image={razerBlackWidow} description = "Hot-swappable Mechanical Gaming Keyboard" precio ="120"/></div>
            <div className="col-3 mt-4"> <Card title="Razer Barracuda Chroma" image={razerBarracuda} description = "Wireless Multi-platform Gaming and Mobile Headset" precio ="100"/></div>
            <div className="col-3 mt-4"> <Card title="Razer Fujin" image={razerFujin} description = "Mesh Gaming Chair" precio="300"/></div>
            <div className="col-3 mt-4"> <Card title="Razer Wolverine V3 Pro" image={razerWolverine} description = "Wireless Esports Controller for Xbox & PC" precio="199"/></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App