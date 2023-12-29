USE crud;

CREATE TABLE products (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(500),
  price DECIMAL(10,2) NOT NULL DEFAULT 0,
  quantity INT DEFAULT 0 NOT NULL
);

INSERT INTO products (name, description, price, quantity)
VALUES
  ('Bolo de Chocolate', 'Misture os ingredientes secos e molhados separadamente. Combine as duas misturas, despeje em uma forma untada e asse por 30 minutos a 180°C.', 25.99, 10),
  ('Cupcake de Morango', 'Prepare a massa com morangos frescos, asse em forminhas individuais e decore com chantilly e um morango inteiro.', 3.99, 20),
  ('Torta de Limão', 'Faça uma massa crocante, prepare o recheio de limão, asse a torta e deixe esfriar antes de servir.', 18.50, 15),
  ('Cookies de Aveia', 'Misture a aveia com a massa, faça bolinhas e achate-as em uma assadeira. Asse até ficarem dourados.', 9.99, 30),
  ('Brigadeiro Gourmet', 'Cozinhe o leite condensado com chocolate, faça bolinhas, passe no granulado e coloque em forminhas.', 2.50, 50),
  ('Pudim de Caramelo', 'Prepare a mistura do pudim, faça uma calda de caramelo, despeje a mistura na forma e asse em banho-maria.', 14.99, 8),
  ('Cone Trufado', 'Derreta o chocolate, faça os cones, recheie com ganache de chocolate e decore com raspas de chocolate.', 6.75, 12),
  ('Cheesecake de Morango', 'Prepare a base de biscoito, faça o recheio de cheesecake, asse a torta e cubra com morangos frescos.', 22.00, 5),
  ('Brownie de Nozes', 'Faça um brownie fudgy com pedaços de nozes, asse e corte em quadrados generosos.', 12.75, 18),
  ('Tiramisu', 'Mergulhe biscoitos no café, faça camadas com creme de mascarpone e finalize com cacau em pó.', 28.50, 25),
  ('Bombom de Morango', 'Recheie morangos com ganache de chocolate, banhe no chocolate e deixe endurecer.', 1.99, 40),
  ('Biscoitos Amanteigados', 'Misture os ingredientes, faça bolinhas, achate e asse até que fiquem dourados.', 8.25, 22),
  ('Pavê de Maracujá', 'Prepare um creme de maracujá, faça camadas com biscoitos champanhe e leve à geladeira.', 16.00, 10),
  ('Caramelos Artesanais', 'Cozinhe açúcar até caramelizar, adicione manteiga e creme, despeje em moldes e deixe esfriar.', 4.50, 35),
  ('Bolo Red Velvet', 'Prepare a massa Red Velvet, asse os bolos, faça um creme de cream cheese e monte o bolo em camadas.', 30.00, 3),
  ('Pão de Mel', 'Faça a massa de mel, asse, corte em quadradinhos e recheie com doce de leite.', 10.00, 28),
  ('Biscoitos de Gengibre', 'Misture os ingredientes, abra a massa com formato de bonecos, asse e decore com glacê.', 7.99, 45),
  ('Mousse de Maracujá', 'Prepare um mousse aerado com suco de maracujá, leve à geladeira e sirva gelado.', 15.00, 15),
  ('Cupcake de Baunilha', 'Faça uma massa leve de baunilha, asse em forminhas e decore com um buttercream de baunilha.', 3.50, 25),
  ('Torta de Maçã', 'Prepare uma massa quebrada, faça o recheio com maçãs, asse e polvilhe canela por cima.', 20.50, 7);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(70) NOT NULL
);

INSERT INTO users (username, password)
VALUES
  ('usuario', '$2b$10$KtZcW8ljC8opIlS9Gzr2zOEDx0vtLcNaUlufTEchjqTu52ePGszQO');
