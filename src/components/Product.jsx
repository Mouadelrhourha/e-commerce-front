import {Button, Card, InputNumber} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import {Meta} from "antd/es/list/Item";

function Product({product}) {
    const {title,price,images,category} = product;
    const image = images[0];
    return (
        <Card
            hoverable
            style={{
                width: 240,
            }}
            cover={<img alt="example" src={image}/>}
            actions={[
                <InputNumber min={1} defaultValue={1}/>,
                <Button type="primary" onClick={() => console.log(product.id)} shape="circle" icon={<PlusOutlined/>}/>,
            ]}
        >
            <p className={"price"}>{price}</p>
            <Meta title={title}/>
            <p className={"categoryName"}>{category.name}</p>
        </Card>
    );

}


export default Product;
