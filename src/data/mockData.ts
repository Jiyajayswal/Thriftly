import { Store, Promo, Notification, Location } from '../types';

export const LOCATIONS: Location[] = [
{ id: 'loc1', name: 'Toronto, ON' },
{ id: 'loc2', name: 'Guelph, ON' },
{ id: 'loc3', name: 'Mississauga, ON' },
{ id: 'loc4', name: 'Hamilton, ON' }
];


export const PROMOS: Promo[] = [
{
  id: 'p1',
  title: '50% Off Vintage Denim',
  subtitle: 'This weekend only at selected stores',
  imageUrl:
  'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800',
  color: 'bg-emerald-800'
},
{
  id: 'p2',
  title: 'New Arrivals',
  subtitle: 'Check out the latest drops at Retro Revival',
  imageUrl:
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
  color: 'bg-indigo-800'
},
{
  id: 'p3',
  title: 'Student Discount',
  subtitle: 'Show your ID for 15% off',
  imageUrl:
  'https://images.unsplash.com/photo-1550614000-4b95d4662230?auto=format&fit=crop&q=80&w=800',
  color: 'bg-rose-800'
}];


export const NOTIFICATIONS: Notification[] = [
{
  id: 'n1',
  title: 'Reservation Expiring Soon',
  message: 'Your reservation at Retro Revival expires in 2 hours.',
  timestamp: '2 hours ago',
  read: false,
  type: 'alert'
},
{
  id: 'n2',
  title: 'New Arrivals',
  message:
  'New arrivals at The Denim Vault! Check them out before they are gone.',
  timestamp: '5 hours ago',
  read: false,
  type: 'info'
},
{
  id: 'n3',
  title: 'Weekend Sale',
  message: 'Weekend sale: 30% off at Thrift & Co.',
  timestamp: '1 day ago',
  read: true,
  type: 'promo'
}];


export const STORES: Store[] = [
{
  id: 's1',
  name: 'Retro Revival',
  vibe: 'Vintage streetwear & 90s nostalgia',
  description:
  'A carefully curated collection of 90s and Y2K streetwear, featuring rare sneakers, graphic tees, and oversized outerwear.',
  address: '124 Bedford Ave, Toronto, ON, N1B 5Z5',
  location: 'Toronto, ON',
  distance: 1.2,
  thumbnailUrl:
  'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800',
  galleryUrls: [
  'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1489987707023-af823c576582?auto=format&fit=crop&q=80&w=800'],

  categories: ['Vintage', 'Streetwear'],
  items: [
  {
    id: 'i1_1',
    storeId: 's1',
    name: 'Vintage Nike Windbreaker',
    price: 45,
    description:
    'Original 90s Nike windbreaker in excellent condition. Navy and red colorway.',
    imageUrl:
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular'
  },
  {
    id: 'i1_2',
    storeId: 's1',
    name: 'Graphic Band Tee',
    price: 25,
    description:
    'Faded black vintage rock band t-shirt. Perfectly worn in.',
    imageUrl:
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600',
    badge: 'One of a kind'
  },
  {
    id: 'i1_3',
    storeId: 's1',
    name: 'Oversized Flannel',
    price: 18,
    description: 'Thick cotton flannel shirt, red and black plaid.',
    imageUrl:
    'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i1_4',
    storeId: 's1',
    name: 'Retro Adidas Track Pants',
    price: 35,
    description: 'Classic 3-stripe track pants in navy blue.',
    imageUrl:
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i1_5',
    storeId: 's1',
    name: 'Y2K Cargo Pants',
    price: 40,
    description: 'Olive green baggy cargo pants with multiple pockets.',
    imageUrl:
    'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600',
    badge: 'New'
  },
  {
    id: 'i1_6',
    storeId: 's1',
    name: 'Chunky Sneakers',
    price: 65,
    description: 'Vintage dad shoes, white with silver accents.',
    imageUrl:
    'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=600'
  }]

},
{
  id: 's2',
  name: 'The Denim Vault',
  vibe: 'Premium vintage denim & workwear',
  description:
  "Specializing in vintage Levi's, Carhartt workwear, and high-quality denim jackets from the 70s to 90s.",
  address: '88 Spring St, Manhattan, NY 10012',
  location: 'Manhattan, NY',
  distance: 4.5,
  thumbnailUrl:
  'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&q=80&w=800',
  galleryUrls: [
  'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800'],

  categories: ['Vintage', 'Budget Finds'],
  items: [
  {
    id: 'i2_1',
    storeId: 's2',
    name: "Levi's 501 Original",
    price: 55,
    description: "Classic straight leg Levi's 501s in medium wash.",
    imageUrl:
    'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular'
  },
  {
    id: 'i2_2',
    storeId: 's2',
    name: 'Carhartt Detroit Jacket',
    price: 85,
    description: 'Faded brown canvas work jacket with blanket lining.',
    imageUrl:
    'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=600',
    badge: 'One of a kind'
  },
  {
    id: 'i2_3',
    storeId: 's2',
    name: 'Vintage Denim Jacket',
    price: 45,
    description: 'Light wash denim jacket, oversized fit.',
    imageUrl:
    'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i2_4',
    storeId: 's2',
    name: 'Carpenter Jeans',
    price: 38,
    description: 'Washed out blue carpenter jeans with hammer loop.',
    imageUrl:
    'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i2_5',
    storeId: 's2',
    name: 'Chore Coat',
    price: 60,
    description: 'Indigo blue denim chore coat with four pockets.',
    imageUrl:
    'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600',
    badge: 'New'
  },
  {
    id: 'i2_6',
    storeId: 's2',
    name: 'Overalls',
    price: 50,
    description: 'Classic hickory stripe denim overalls.',
    imageUrl:
    'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&q=80&w=600'
  }]

},
{
  id: 's3',
  name: 'Second Wave',
  vibe: 'Curated designer pieces & modern thrift',
  description:
  'A modern approach to thrifting. We curate high-quality contemporary brands and accessible designer pieces.',
  address: '450 Grand St, Guelph, ON, N1L 0T0',
  location: 'Guelph, ON',
  distance: 2.1,
  thumbnailUrl:
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  galleryUrls: [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800'],

  categories: ['Vintage', 'Accessories'],
  items: [
  {
    id: 'i3_1',
    storeId: 's3',
    name: 'Silk Slip Dress',
    price: 42,
    description: 'Minimalist 90s style black silk slip dress.',
    imageUrl:
    'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular'
  },
  {
    id: 'i3_2',
    storeId: 's3',
    name: 'Cashmere Sweater',
    price: 65,
    description: 'Ultra-soft camel colored cashmere crewneck.',
    imageUrl:
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i3_3',
    storeId: 's3',
    name: 'Leather Crossbody Bag',
    price: 55,
    description: 'Vintage Coach leather crossbody in mahogany.',
    imageUrl:
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600',
    badge: 'One of a kind'
  },
  {
    id: 'i3_4',
    storeId: 's3',
    name: 'Tailored Blazer',
    price: 48,
    description: 'Oversized wool blend blazer in houndstooth.',
    imageUrl:
    'https://images.unsplash.com/photo-1591369822096-111151828f0f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i3_5',
    storeId: 's3',
    name: 'Pleated Trousers',
    price: 35,
    description: 'High-waisted wide leg pleated trousers.',
    imageUrl:
    'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i3_6',
    storeId: 's3',
    name: 'Chunky Loafers',
    price: 45,
    description: 'Black leather loafers with a thick lug sole.',
    imageUrl:
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600',
    badge: 'New'
  }]

},
{
  id: 's4',
  name: 'Thrift & Co.',
  vibe: 'Everyday budget finds & basics',
  description:
  'Your neighborhood spot for affordable, everyday clothing. Great basics, tees, and casual wear.',
  address: '1200 S Congress Ave, Austin, TX 78704',
  location: 'Austin, TX',
  distance: 3.4,
  thumbnailUrl:
  'https://images.unsplash.com/photo-1521335629791-ce4aec670d59?auto=format&fit=crop&q=80&w=800',
  galleryUrls: [
  'https://images.unsplash.com/photo-1521335629791-ce4aec670d59?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1489987707023-af823c576582?auto=format&fit=crop&q=80&w=800'],

  categories: ['Budget Finds'],
  items: [
  {
    id: 'i4_1',
    storeId: 's4',
    name: 'Basic Cotton Hoodie',
    price: 15,
    description: 'Comfortable gray pullover hoodie.',
    imageUrl:
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600',
    badge: 'Sale'
  },
  {
    id: 'i4_2',
    storeId: 's4',
    name: 'Denim Shorts',
    price: 12,
    description: 'Cut-off light wash denim shorts.',
    imageUrl:
    'https://images.unsplash.com/photo-1591369822096-111151828f0f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i4_3',
    storeId: 's4',
    name: 'Striped T-Shirt',
    price: 8,
    description: 'Classic navy and white striped tee.',
    imageUrl:
    'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i4_4',
    storeId: 's4',
    name: 'Corduroy Jacket',
    price: 22,
    description: 'Tan corduroy button-up jacket.',
    imageUrl:
    'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i4_5',
    storeId: 's4',
    name: 'Canvas Tote Bag',
    price: 5,
    description: 'Simple blank canvas tote.',
    imageUrl:
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i4_6',
    storeId: 's4',
    name: 'Beanie',
    price: 6,
    description: 'Knit ribbed beanie in mustard yellow.',
    imageUrl:
    'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&q=80&w=600'
  }]

},
{
  id: 's5',
  name: 'Vintage Vibes',
  vibe: '70s & 80s retro fashion',
  description:
  'Step back in time with our colorful collection of 70s disco wear and 80s neon fashion.',
  address: '1022 W Burnside St, Hamilton, ON, N7L 2L9',
  location: 'Hamilton, ON',
  distance: 1.8,
  thumbnailUrl:
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800',
  galleryUrls: [
  'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800'],

  categories: ['Vintage', 'Accessories'],
  items: [
  {
    id: 'i5_1',
    storeId: 's5',
    name: 'Patterned Silk Shirt',
    price: 35,
    description: 'Wild 70s geometric print button-down.',
    imageUrl:
    'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular'
  },
  {
    id: 'i5_2',
    storeId: 's5',
    name: 'Flared Jeans',
    price: 40,
    description: 'High-waisted bell bottom jeans.',
    imageUrl:
    'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i5_3',
    storeId: 's5',
    name: 'Leather Moto Jacket',
    price: 75,
    description: 'Distressed black leather motorcycle jacket.',
    imageUrl:
    'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=600',
    badge: 'One of a kind'
  },
  {
    id: 'i5_4',
    storeId: 's5',
    name: 'Retro Sunglasses',
    price: 15,
    description: 'Oversized aviator style sunglasses.',
    imageUrl:
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i5_5',
    storeId: 's5',
    name: 'Platform Boots',
    price: 55,
    description: 'White patent leather platform boots.',
    imageUrl:
    'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i5_6',
    storeId: 's5',
    name: 'Windbreaker Suit',
    price: 45,
    description: 'Neon 80s matching windbreaker jacket and pants.',
    imageUrl:
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600'
  }]

},
{
  id: 's6',
  name: 'Street Culture',
  vibe: 'Hypebeast & skate wear',
  description:
  'The best spot for second-hand skate brands, limited sneakers, and graphic tees.',
  address: '250 Bowery, Mississauga, ON, N0B 1K2',
  location: 'Mississauga, ON',
  distance: 5.2,
  thumbnailUrl:
  'https://images.unsplash.com/photo-1489987707023-af823c576582?auto=format&fit=crop&q=80&w=800',
  galleryUrls: [
  'https://images.unsplash.com/photo-1489987707023-af823c576582?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800'],

  categories: ['Streetwear'],
  items: [
  {
    id: 'i6_1',
    storeId: 's6',
    name: 'Supreme Box Logo Tee',
    price: 85,
    description: 'Classic white tee with red box logo. Good condition.',
    imageUrl:
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600',
    badge: 'Popular'
  },
  {
    id: 'i6_2',
    storeId: 's6',
    name: 'Skate Deck',
    price: 30,
    description: 'Slightly used graphic skate deck.',
    imageUrl:
    'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i6_3',
    storeId: 's6',
    name: 'Baggy Skate Jeans',
    price: 45,
    description: 'Ultra wide leg light wash jeans.',
    imageUrl:
    'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i6_4',
    storeId: 's6',
    name: 'Jordan 1 High',
    price: 80,
    description: 'Chicago colorway, well worn but plenty of life left.',
    imageUrl:
    'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&q=80&w=600',
    badge: 'One of a kind'
  },
  {
    id: 'i6_5',
    storeId: 's6',
    name: 'Stussy Hoodie',
    price: 50,
    description: 'Black pullover with classic logo print.',
    imageUrl:
    'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'i6_6',
    storeId: 's6',
    name: 'Crossbody Pouch',
    price: 25,
    description: 'Small black nylon shoulder bag.',
    imageUrl:
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600'
  }]

}];