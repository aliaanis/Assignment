
export default function StorePrimary(primary,item){
        console.log("hi");
        primary.sale_price=item.sale_price;
        primary.mark_price=item.mark_price;
        primary.name=item.name;
        primary.sale_msg=item.sale_msg;
        primary.sign=item.sign;
        primary.image=item.images;
        return primary;
    
}

