import {Button, InputNumber} from "antd";
import { PlusOutlined } from '@ant-design/icons';

function Product({product}) {
    const {title,price,images,category} = product;
    const image = images[0];
    return (
        <div className={"productCard"}>
            <img src={image} height={200} width={200}/>
            <p className={"price"}>{price}</p>
            <p className={"title"}>{title}</p>
            <p className={"categoryName"}>{category.name}</p>
            <div className={"addToCard"}>
                <InputNumber min={1}  defaultValue={1}  />
                <Button type="primary" onClick={() => console.log(product.id)} shape="circle" icon={<PlusOutlined />} />
            </div>
        </div>
    );

}


export default Product;
