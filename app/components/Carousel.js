import React from "react";
import Card from "./card/Card";

export default function Carousel() {
  return (
    <div className="mt-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-12">
      <div>
        <h2 className="text-4xl font-semibold text-white">
          Onze koningsdag truien:
        </h2>
        <p className="mt-2 text-white">
          Hier heb ik met <span className="italic">props</span> goefoend om
          verschillende producten met andere afbeeldingen en teksten te laten
          zien.
        </p>
      </div>
      <div className="flex gap-4 mt-6">
        <Card
          img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Willempie-600x600.png"
          title="Willempie Sweater"
          text="Dé koningsdag sweater die je moet hebben!"
          price="45,-"
        />
        <Card
          img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_Koning-pils_wit.png"
          title="Koning Pils Sweater"
          text="Dit is echt de beste sweater!"
          price="34,-"
        />
        <Card
          img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_King-balk-600x600.png"
          title="King Sweater"
          text="Of is toch deze sweater de beste?"
          price="40,-"
        />
        <Card
          img="https://www.lekkergebekt.nl/wp-content/uploads/2024/03/Mockup_Sweater_LamLeveDeKoning_wit-600x600.png"
          title="Lam Leve De Koning Sweater"
          text="Nee het is echt deze!"
          price="38,-"
        />
        <Card
          img="https://www.lekkergebekt.nl/wp-content/uploads/2023/10/LG_Sweater_Rood_Pilsje-1.png"
          title="Pilsje Sweater"
          text="Voor de pilsers."
          price="25,-"
        />
        <Card
          img="https://www.lekkergebekt.nl/wp-content/uploads/2020/11/brabo_hoodies_grijs.jpg"
          title="Brabo Hoodie"
          text="Brabo respresent!"
          price="29,-"
        />
      </div>
    </div>
  );
}
