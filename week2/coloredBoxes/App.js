import React from 'react';
import Item from './item';

function App() {
  return (
    <div>
      <Item
        backgroundColor="aliceblue"
        title="Sword"
        subtitle="Long"
        information="A longsword is a versatile weapon, so medium characters may wield it two-handed to deal 1 extra damage. Small characters must wield it two-handed, and they deal no extra damage for doing so."
      />

      <Item
        backgroundColor="cornsilk"
        title="Sword"
        subtitle="Short"
        information="A short sword is an off-hand weapon. A character can use a short sword to make attacks even while holding another one-handed weapon in the other hand, and can use the other one-handed weapon to make attacks even if it isn't an off-hand weapon."
      />

      <Item
        backgroundColor="aliceblue"
        title="Pick"
        subtitle="War"
        information="A war pick has high crits, dealing an extra 1d8 damage at levels 1-10, 2d8 damage at levels 11-20, or 3d8 damage at level 21-30, on a critical hit. It is also a small and versatile weapon, so both Small and Medium characters may wield it two-handed to deal 1 extra damage."
      />

      <Item
        backgroundColor="cornsilk"
        title="Dagger"
        subtitle="Lancing"
        information="A Lancing dagger is a Superior weapon. It is made of metal drawn from tall mountains and features two jagged edges, giving it the shape of a lightning bolt. It is designed to assist classes that use the dagger as an implement."
      />

      <Item
        backgroundColor="aliceblue"
        title="Mace"
        subtitle="Light"
        information="A light mace is an off-hand weapon. A character can use a light mace to make attacks even while holding another one-handed weapon in the other hand, and can use the other one-handed weapon to make attacks even if it isn't an off-hand weapon. A light mace is also a small weapon."
      />

      <Item
        backgroundColor="cornsilk"
        title="Sword"
        subtitle="Bastard"
        information="A bastard sword is a versatile weapon, so medium characters may wield it two-handed to deal 1 extra damage. Small characters must wield it two-handed, and they deal no extra damage for doing so."
      />

      <Item
        backgroundColor="aliceblue"
        title="Dagger"
        subtitle="Parrying"
        information="A parrying dagger is a defensive weapon, so a character proficient with the parrying dagger gains a +1 bonus to AC while wielding it. A parrying dagger is also an off-hand weapon. A character can use a parrying dagger to make attacks even while holding another one-handed weapon in the other hand, and can use the other one-handed weapon to make attacks even if it isn't an off-hand weapon."
      />

      <Item
        backgroundColor="cornsilk"
        title="Dagger"
        subtitle="Resonating"
        information="A Resonating dagger is a Superior weapon. It has a thick, wide blade that narrows only slightly as it approaches the tip, and can only be made from the steel of a melted-down warhammer. It is designed to assist classes that use the dagger as an implement."
      />

      <Item
        backgroundColor="aliceblue"
        title="Gauntlet"
        subtitle="Spiked"
        information="A spiked gauntlet is an off-hand weapon. A character can use a spiked gauntlet to make attacks even while holding another one-handed weapon in the other hand, and can use the other one-handed weapon to make attacks even if it isn't an off-hand weapon. Unlike most magic weapons, enchanted spiked gauntlets occupy the magic item hands slot."
      />

      <Item
        backgroundColor="cornsilk"
        title="Hammer"
        subtitle="Throwing"
        information="A throwing hammer is an off-hand weapon. A character can use a throwing hammer to make attacks even while holding another one-handed weapon in the other hand, and can use the other one-handed weapon to make attacks even if it isn't an off-hand weapon. It is also a heavy thrown weapon, so a character can throw it to make ranged attacks, using Strength instead of Dexterity for ranged basic attacks."
      />
    </div>
  )
}

export default App;
