module.exports = (sequelize, Sequelize, Model)=>{
    class Products extends Model{}

    Products.init({
        title:{
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        sequelize,
        tableName: 'Products',
        timestamps: false
    });

    return Products;
}