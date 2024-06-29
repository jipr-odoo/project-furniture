const db = require('../db');

const getAllProduct = (req, res) => {
  
    const sql = `SELECT 
                    fi.id, fi.name, fi.description, fi.rental_price, fi.availability_status, 
                    GROUP_CONCAT(fim.image_url) AS images
                FROM 
                    furniture_items fi
                LEFT JOIN 
                    furniture_images fim ON fi.id = fim.furniture_id
                GROUP BY 
                    fi.id;
                `;
  
    // const sql = "SELECT * from products";
    db.query(sql, (err, data) => {
      if (err) {
        return res.json({ Error: "Error" });
      } else {
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
        return res.json(data);
      }
    });
  }

module.exports = { getAllProduct };