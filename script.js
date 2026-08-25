const products = [
{id:1,name:"فستان ساتان شامبانيا",cat:"women",price:49,old:65,tag:"NEW",img:"https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",desc:"فستان ساتان بقصّة ناعمة ولمسة أنيقة للمناسبات.",sizes:["S","M","L","XL"],colors:["#d8c1a8","#171717"]},
{id:2,name:"بليزر قصّة راقية",cat:"women",price:59,tag:"BEST",img:"https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",desc:"بليزر أنيق بقصّة مرتبة يناسب الإطلالات اليومية والرسمية.",sizes:["S","M","L"],colors:["#171717","#d8d0c6"]},
{id:3,name:"قميص أبيض كلاسيكي",cat:"women",price:29,tag:"NEW",img:"https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85",desc:"قميص أبيض أساسي بتفصيل نظيف وسهل التنسيق.",sizes:["S","M","L","XL"],colors:["#fff"]},
{id:4,name:"تنورة ميدي بيج",cat:"women",price:34,tag:"",img:"https://images.unsplash.com/photo-1583496661160-fb5886a13d27?auto=format&fit=crop&w=900&q=85",desc:"تنورة ميدي بستايل هادئ وراقي.",sizes:["S","M","L"],colors:["#cdbda9","#171717"]},
{id:5,name:"جاكيت جلد أنيق",cat:"women",price:69,old:85,tag:"SALE",img:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",desc:"جاكيت جلد بستايل عصري لإطلالة قوية.",sizes:["S","M","L"],colors:["#171717"]},
{id:6,name:"قميص رجالي أوكسفورد",cat:"men",price:32,tag:"NEW",img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",desc:"قميص أوكسفورد بقصّة مرتبة للاستخدام اليومي.",sizes:["M","L","XL","XXL"],colors:["#fff","#8b9aa8"]},
{id:7,name:"بليزر رجالي أسود",cat:"men",price:79,tag:"BEST",img:"https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=85",desc:"بليزر كلاسيكي بتفاصيل نظيفة وحضور فاخر.",sizes:["M","L","XL"],colors:["#171717"]},
{id:8,name:"تيشيرت Premium",cat:"men",price:22,tag:"",img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",desc:"تيشيرت قطني مريح بتصميم بسيط.",sizes:["S","M","L","XL"],colors:["#fff","#171717","#777"]},
{id:9,name:"بنطال رسمي Straight",cat:"men",price:39,tag:"NEW",img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=85",desc:"بنطال بقصّة مستقيمة لإطلالة مرتبة.",sizes:["30","32","34","36"],colors:["#171717","#7a756d"]},
{id:10,name:"هودي رجالي Minimal",cat:"men",price:35,old:45,tag:"SALE",img:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",desc:"هودي مريح بستايل Minimal.",sizes:["M","L","XL"],colors:["#777","#171717"]},
{id:11,name:"فستان بنات ناعم",cat:"girls",price:28,tag:"NEW",img:"https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=85",desc:"فستان لطيف بتفاصيل ناعمة للمناسبات واليوميات.",sizes:["4Y","6Y","8Y","10Y"],colors:["#e6c8cf","#fff"]},
{id:12,name:"طقم بنات يومي",cat:"girls",price:32,tag:"",img:"https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",desc:"طقم عملي ومريح بتنسيق جاهز.",sizes:["4Y","6Y","8Y","10Y"],colors:["#d9d0c5","#b9c7c1"]},
{id:13,name:"بلوزة بنات وردية",cat:"girls",price:21,tag:"NEW",img:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",desc:"بلوزة خفيفة بلون ناعم وتفاصيل لطيفة.",sizes:["4Y","6Y","8Y","10Y"],colors:["#e4b8c1","#fff"]},
{id:14,name:"جاكيت بنات Denim",cat:"girls",price:37,tag:"",img:"https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",desc:"جاكيت جينز سهل التنسيق.",sizes:["6Y","8Y","10Y","12Y"],colors:["#7392a8"]},
{id:15,name:"طقم أولاد Casual",cat:"boys",price:34,tag:"NEW",img:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",desc:"طقم عملي وأنيق للحركة واليوميات.",sizes:["4Y","6Y","8Y","10Y"],colors:["#6d7778","#d6cfc5"]},
{id:16,name:"هودي أولاد",cat:"boys",price:27,tag:"BEST",img:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",desc:"هودي مريح بتصميم شبابي.",sizes:["6Y","8Y","10Y","12Y"],colors:["#777","#171717"]},
{id:17,name:"قميص أولاد مخطط",cat:"boys",price:24,tag:"",img:"https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=900&q=85",desc:"قميص مخطط خفيف للإطلالات اليومية.",sizes:["4Y","6Y","8Y","10Y"],colors:["#fff","#7890a0"]},
{id:18,name:"بنطال جينز أولاد",cat:"boys",price:29,tag:"",img:"https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",desc:"جينز مريح وسهل الحركة.",sizes:["6Y","8Y","10Y","12Y"],colors:["#46657a"]},
{id:19,name:"كعب نسائي Classic",cat:"shoes",price:55,tag:"BEST",img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",desc:"حذاء كلاسيكي بلمسة أنثوية راقية.",sizes:["36","37","38","39","40"],colors:["#171717","#c5a78e"]},
{id:20,name:"Sneakers أبيض",cat:"shoes",price:42,tag:"NEW",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",desc:"سنيكرز أبيض متعدد الاستخدامات.",sizes:["36","37","38","39","40","41"],colors:["#fff"]},
{id:21,name:"حذاء رجالي جلد",cat:"shoes",price:65,tag:"",img:"https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=85",desc:"حذاء جلد أنيق للمناسبات والإطلالات الرسمية.",sizes:["40","41","42","43","44"],colors:["#171717","#6d4c3b"]},
{id:22,name:"Sneakers أطفال",cat:"shoes",price:25,tag:"",img:"https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=900&q=85",desc:"سنيكرز خفيف ومريح للأطفال.",sizes:["28","30","32","34"],colors:["#fff","#6d7782"]},
{id:23,name:"شنطة كتف Mini",cat:"bags",price:39,tag:"NEW",img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",desc:"شنطة كتف صغيرة وأنيقة للمشاوير اليومية.",sizes:["ONE SIZE"],colors:["#b89c83","#171717"]},
{id:24,name:"شنطة Tote فاخرة",cat:"bags",price:49,tag:"BEST",img:"https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",desc:"Tote واسعة تجمع العملية والأناقة.",sizes:["ONE SIZE"],colors:["#c9b49d","#171717"]},
{id:25,name:"نظارة شمسية Classic",cat:"bags",price:29,tag:"",img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",desc:"نظارة بإطار كلاسيكي سهل التنسيق.",sizes:["ONE SIZE"],colors:["#171717","#8a6b4a"]},
{id:26,name:"حزام جلد Minimal",cat:"bags",price:22,tag:"",img:"https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85",desc:"حزام جلد بتصميم بسيط وأنيق.",sizes:["S","M","L"],colors:["#171717","#6d4c3b"]}
];

const labels={all:"كل المنتجات",women:"نسائي",men:"رجالي",girls:"بنات",boys:"أولاد",shoes:"أحذية",bags:"شنط وإكسسوارات"};
let state={category:"all",search:"",sort:"featured",cart:JSON.parse(localStorage.getItem("vayaCart")||"[]"),favorites:JSON.parse(localStorage.getItem("vayaFav")||"[]")};

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

function save(){localStorage.setItem("vayaCart",JSON.stringify(state.cart));localStorage.setItem("vayaFav",JSON.stringify(state.favorites));}
function money(n){return `${n.toFixed(2)} د.أ`}
function getProduct(id){return products.find(p=>p.id===Number(id))}
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove("show"),2200)}

function filtered(){
 let list=products.filter(p=>(state.category==="all"||p.cat===state.category)&&(!state.search||`${p.name} ${labels[p.cat]}`.toLowerCase().includes(state.search.toLowerCase())));
 if(state.sort==="low")list.sort((a,b)=>a.price-b.price);
 if(state.sort==="high")list.sort((a,b)=>b.price-a.price);
 if(state.sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name,"ar"));
 return list;
}

function renderProducts(){
 const list=filtered(), grid=$("#productGrid");
 $("#collectionTitle").textContent=labels[state.category];
 $("#resultCount").textContent=`${list.length} منتج`;
 $("#emptyState").hidden=!!list.length;
 grid.innerHTML=list.map(p=>`
 <article class="product-card">
  <div class="product-image">
   ${p.tag?`<span class="product-tag">${p.tag}</span>`:""}
   <button class="fav ${state.favorites.includes(p.id)?"active":""}" data-fav="${p.id}">${state.favorites.includes(p.id)?"♥":"♡"}</button>
   <img src="${p.img}" alt="${p.name}" loading="lazy">
   <button class="quick" data-product="${p.id}">عرض التفاصيل</button>
  </div>
  <div class="product-info">
   <div class="product-category">${labels[p.cat]}</div>
   <div class="product-name">${p.name}</div>
   <div class="price">${money(p.price)} ${p.old?`<span class="old">${money(p.old)}</span>`:""}</div>
  </div>
 </article>`).join("");
 updateCounts();
}

function updateCounts(){
 $("#cartCount").textContent=state.cart.reduce((s,i)=>s+i.qty,0);
 $("#favCount").textContent=state.favorites.length;
}

function renderCart(){
 const box=$("#cartItems");
 if(!state.cart.length){box.innerHTML=`<div class="empty-drawer">السلة لسا فاضية 🛍<br><small>اختاري قطعة وابدئي تسوق.</small></div>`;$("#cartTotal").textContent=money(0);return}
 box.innerHTML=state.cart.map((item,i)=>{const p=getProduct(item.id);return `<div class="cart-row">
 <img src="${p.img}" alt="${p.name}">
 <div><h4>${p.name}</h4><p>${item.size?`المقاس: ${item.size}`:""} ${item.color?` · اللون`: ""}</p><p>${item.qty} × ${money(p.price)}</p><button class="remove" data-remove="${i}">حذف</button></div>
 </div>`}).join("");
 $("#cartTotal").textContent=money(state.cart.reduce((s,i)=>s+getProduct(i.id).price*i.qty,0));
}

function renderFavorites(){
 const box=$("#favItems"), list=state.favorites.map(getProduct).filter(Boolean);
 box.innerHTML=list.length?list.map(p=>`<div class="cart-row"><img src="${p.img}" alt="${p.name}"><div><h4>${p.name}</h4><p>${money(p.price)}</p><button class="remove" data-fav="${p.id}">إزالة</button></div></div>`).join(""):`<div class="empty-drawer">ما عندكِ منتجات بالمفضلة ♡</div>`;
}

function openDrawer(id){$("#overlay").classList.add("open");$("#"+id).classList.add("open");renderCart();renderFavorites()}
function closeAll(){ $$(".drawer,.modal").forEach(x=>x.classList.remove("open"));$("#overlay").classList.remove("open")}

function openProduct(id){
 const p=getProduct(id); if(!p)return;
 $("#modalContent").innerHTML=`<div class="modal-product">
 <img src="${p.img}" alt="${p.name}">
 <div class="modal-info">
  <p class="eyebrow">${labels[p.cat]}</p><h2>${p.name}</h2><div class="modal-price">${money(p.price)} ${p.old?`<span class="old">${money(p.old)}</span>`:""}</div>
  <p>${p.desc}</p>
  <div class="options">
   <label>المقاس</label><div class="size-list">${p.sizes.map((s,i)=>`<button class="${i===0?"selected":""}" data-size="${s}">${s}</button>`).join("")}</div>
   <label>اللون</label><div class="color-list">${p.colors.map((c,i)=>`<button title="${c}" class="${i===0?"selected":""}" style="background:${c}" data-color="${c}"></button>`).join("")}</div>
  </div>
  <button class="add-modal" id="addModal" data-add="${p.id}">أضيفي إلى السلة</button>
 </div></div>`;
 $("#productModal").classList.add("open");
 $("#overlay").classList.add("open");
}

function setCategory(cat){
 state.category=cat; state.search="";
 $("#searchInput").value="";
 $$(".chip").forEach(c=>c.classList.toggle("active",c.dataset.category===cat));
 renderProducts();
 document.querySelector("#shop").scrollIntoView({behavior:"smooth"});
}

document.addEventListener("click",e=>{
 const cat=e.target.closest("[data-category]"); if(cat){setCategory(cat.dataset.category);return}
 const product=e.target.closest("[data-product]"); if(product){openProduct(product.dataset.product);return}
 const fav=e.target.closest("[data-fav]"); if(fav){
  const id=Number(fav.dataset.fav);
  if(state.favorites.includes(id))state.favorites=state.favorites.filter(x=>x!==id);else state.favorites.push(id);
  save();renderProducts();renderFavorites();return
 }
 const rem=e.target.closest("[data-remove]"); if(rem){state.cart.splice(Number(rem.dataset.remove),1);save();renderCart();updateCounts();return}
 const close=e.target.closest("[data-close]"); if(close){closeAll();return}
 if(e.target.id==="overlay")closeAll();
 const scroll=e.target.closest("[data-scroll]");if(scroll){document.querySelector(scroll.dataset.scroll).scrollIntoView({behavior:"smooth"});return}
 const foot=e.target.closest("[data-footer-category]");if(foot){setCategory(foot.dataset.footerCategory);return}
 if(e.target.id==="cartBtn")openDrawer("cartDrawer");
 if(e.target.id==="favoritesBtn")openDrawer("favDrawer");
 if(e.target.id==="searchBtn"){$("#searchbar").classList.toggle("open");if($("#searchbar").classList.contains("open"))$("#searchInput").focus()}
 if(e.target.id==="mobileMenu")$("#navLinks").classList.toggle("open");
 if(e.target.id==="clearSearch"){$("#searchInput").value="";state.search="";renderProducts()}
 if(e.target.id==="checkoutBtn"){if(!state.cart.length)showToast("السلة فاضية");else showToast("صفحة الدفع جاهزة للربط لاحقًا 💳")}
 if(e.target.id==="addModal"){
  const p=getProduct(e.target.dataset.add);const size=$(".size-list .selected")?.dataset.size||p.sizes[0];const color=$(".color-list .selected")?.dataset.color||p.colors[0];
  const existing=state.cart.find(i=>i.id===p.id&&i.size===size&&i.color===color);if(existing)existing.qty++;else state.cart.push({id:p.id,qty:1,size,color});
  save();renderCart();updateCounts();closeAll();showToast("تمت إضافة القطعة إلى السلة 🛍");
 }
 const size=e.target.closest("[data-size]");if(size){$$("[data-size]").forEach(x=>x.classList.remove("selected"));size.classList.add("selected")}
 const color=e.target.closest("[data-color]");if(color){$$("[data-color]").forEach(x=>x.classList.remove("selected"));color.classList.add("selected")}
});

$("#searchInput").addEventListener("input",e=>{state.search=e.target.value;renderProducts()});
$("#sortSelect").addEventListener("change",e=>{state.sort=e.target.value;renderProducts()});
$("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();$("#newsletterMsg").textContent="تم الاشتراك بنجاح 🤍";e.target.reset()});
$$("[data-filter-sale]").forEach(b=>b.addEventListener("click",()=>{state.category="all";state.search="";state.sort="low";$("#searchInput").value="";renderProducts();document.querySelector("#shop").scrollIntoView({behavior:"smooth"});showToast("عرضنا لكِ المنتجات مرتبة حسب السعر")}));

renderProducts();renderCart();renderFavorites();