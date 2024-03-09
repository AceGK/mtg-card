import Image from "next/image";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <main >
      <Card  
        title="Mugen"
        mana="/icons/b.svg"
        image="/images/mugen.jpg"
        type="Creature — Cat"
        set="/icons/m-10-g.svg"
        description="When Mugen enters the battlefield, each player discards all the cards in their hand. Sacrafice a Food: Return Mugen to the top of its owner's library"
        flavorText="The void consumes all"
        stats="0/0"
        details="1/1 R M24 EN AceGK"
        copywrite="™ & © 2010 Wizards of the Toast"
      />
    </main>
  );
}
