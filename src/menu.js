export const categories=['All','Starter','Main','Soup & Vegetables','Sides','Protein'];
const rows=[
['puff-puff','Puff Puff','Starter','Sweet fried dough balls.','puff-puff','10 pieces'],
['suya','Beef Suya','Starter','Grilled spiced beef skewers with onions and yaji.','beef-suya'],
['pie','Meat Pie','Starter','Buttery pastry with minced beef and potato.','meat-pies'],
['chops','Small Chops','Starter','Samosa, spring rolls, puff puff and gizzard.','small-chops'],
['jollof','Jollof Rice','Main','Smoky Nigerian jollof rice, cooked with rich tomatoes, peppers and traditional spices.','hero'],
['fried','Fried Rice','Main','Freshly prepared vegetable fried rice.','fried-rice'],
['ofada','Ofada Rice','Main','Local rice, best served with Ayamase sauce.','ofada-rice'],
['asaro','Asaro (Yam Porridge)','Main','Creamy yam pottage in a rich palm oil sauce.','asaro'],
['ewa','Ewa Agoyin','Main','Soft mashed beans with sauce.','ewa'],
['eba','Eba','Main','Garri mould swallow, perfect with soup and vegetables.','eba'],
['poundo','Poundo Yam','Main','Smooth yam swallow to pair with soup or vegetables.','poundo'],
['amala','Amala','Main','A classic Nigerian swallow for your favourite soup.','amala'],
['egusi','Egusi Soup','Soup & Vegetables','Rich melon seed soup with leafy greens and traditional spices.','egusi'],
['efo','Efo Riro','Soup & Vegetables','A hearty Nigerian leafy vegetable stew.','efo-riro'],
['ogbono','Ogbono Soup','Soup & Vegetables','Comforting ogbono soup, full of traditional flavour.','ogbono'],
['pepper','Pepper Soup','Soup & Vegetables','A warming, aromatic broth with fragrant Nigerian spices.','pepper-soup'],
['ayamase','Ayamase Stew','Soup & Vegetables','Rich green pepper stew, a delicious partner for Ofada rice.','ayamase'],
['okro','Okro','Soup & Vegetables','Traditional okra soup, ready to pair with your favourite swallow.','okro'],
['gbegiri','Gbegiri & Ewedu','Soup & Vegetables','The much-loved pairing of bean soup and jute leaves.','gbegiri'],
['moi','Moi Moi','Sides','Steamed bean pudding with egg and fish.','moi'],
['plantain','Fried Plantain','Sides','Sweet ripe plantain, golden fried.','plantain'],
['gizzard','Dodo Gizzard','Sides','A delicious combination of plantain and gizzard.','gizzard'],
...['Beef','Chicken','Turkey','Fish','Assorted Meat'].map(n=>[n.toLowerCase().replace(' ','-'),n,'Protein',`Add ${n.toLowerCase()} to complete your meal.`,n.toLowerCase().replace(' ','-')])];
export const menu=rows.map(([id,name,category,description,image,portion])=>({id,name,category,description,image,portion}));
export const imageUrl=m=>`/assets/${m.image}${['efo-riro','egusi','ogbono','pepper-soup'].includes(m.image)?'-20261006.webp':'.png'}`;
export const email='yamzahkitchen@gmail.com', phone='07449793979';
