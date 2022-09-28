export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
            
        },
        {
            name: 'desription',
            title: 'Description',
            type: 'string'
        }
    ]
}