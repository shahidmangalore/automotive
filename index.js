const express = require('express');
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
extname:'hbs',
defaultLayout: 'index',
partialsDir: __dirname + '/views/partials/',
}));
app.use(express.static('public'));
const all_cars = {
  swift:[
    {
      name:'maruti suzuki swift',
      image:'https://imgd.aeplcdn.com/1056x594/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=85&wm=1',
      price:5.87,
      variant:['lxi','lxi+','vxi','vxi+','zxi','zxi+'],
      images:[
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/swift-exterior-right-front-three-quarter-63.jpeg?q=85',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/swift-exterior-left-front-three-quarter.jpeg?q=85',
        'https://imgd.aeplcdn.com/272x153/n/cw/ec/54399/swift-exterior-right-rear-three-quarter.jpeg?q=85',
        'https://imgd.aeplcdn.com/476x268/n/cw/ec/54399/swift-exterior-right-side-view.jpeg?q=85',
        'https://imgd.aeplcdn.com/272x153/n/cw/ec/54399/swift-exterior-rear-view.jpeg?q=85',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/swift-interior-dashboard.jpeg?q=85',
        'https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/swift-interior-front-row-seats.jpeg?q=85'
      ],
      overview:[
        {
          engine:'1198cc',
          transmission:'manual and amt',
          seating_capacity:'5 seater',
          fuel:'petrol'
        }
      ],
      summary:'Maruti Suzuki has launched the updated version of its',
      price1:'Maruti Suzuki Swift price starts at ₹ 7.06 Lakh and ',
      specifications:[
        {
          engine:'1197 cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC',
          engine_type:'1.2l dual jet',
          fuel_type:'petrol',
          torque:'113 Nm @ 4400 rpm',
          power:'89 bhp @ 6000 rpm',
          mileage:'23.2 kmpl',
          range:'858 km'
        }
      ]
    }
  ],
  wagonr:[
    {
      name:'maruti suzuki wagonR',
      image:'https://imgd.aeplcdn.com/1056x594/n/cw/ec/34467/wagonr-exterior-right-front-three-quarter-3.jpeg?q=85&wm=1'
    }
  ]
};



  app.get('/', (req, res) => {
  res.render('main', {title:'home page'
  });
  });

  app.get('/about', (req, res) => {
    res.render('about',{title:'about page'});
    
  });

  app.get('/news', (req, res) => {
    res.render('news',{title:'news page'});
    
  });

  app.get('/blogs', (req, res) => {
    res.render('blogs',{title:'blogs page'});
    
  });
  app.get('/contact', (req, res) => {
    res.render('contact',{title:'contact page'});
    
  });

  
  app.get('/cars', (req, res) => {
    const car_name = req.params.car;
    const car = all_cars[car_name];
    res.render('car',{
      title:'car',
      car: car,
    });
  });

  
app.listen(port, () => console.log(`App listening to port ${port}`));


