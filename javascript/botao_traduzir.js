
// Traduzir para o ingles
function traduzirParaIngles() {
    var paragrafo = document.querySelector('.geral');
    var texto = paragrafo.innerText;
    
    
    var traducao = {
      'O Teatro Amazonas � um dos mais importantes teatros do Brasil e o principal cart�o-postal da cidade de Manaus. Localizado no Largo de S�o Sebasti�o, no Centro Hist�rico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da �poca, que idealizava a cidade � altura dos grandes centros culturais. � amplamente considerado como um dos mais belos teatros do mundo. De estilo renascentista entorno de sua estrutura externa com os detalhes �nicos na sua c�pula, tornou-se um dos monumentos mais conhecidos do Brasil e, consequentemente, o maior s�mbolo cultural de Manaus, e uma das express�es arquitet�nicas respons�veis pela fama da cidade de Paris dos Tr�picos. Por ser uma obra singular no pa�s e representar o apogeu de Manaus durante o ciclo da borracha, foi tombado como Patrim�nio Hist�rico Nacional pelo IPHAN em 1966. Est� localizado mais precisamente na Avenida Eduardo Ribeiro e recebe cerca de 288 mil visitantes ao ano. Com uma decora��o muito nobre, o Teatro Amazonas j� foi palco n�o somente de grandes pe�as teatrais, mas tamb�m de shows internacionais como o da banda The White Stripes. Desde 1997, o Festival Amazonas de �pera � realizado no teatro. Em 2008, o teatro foi eleito uma das sete maravilhas brasileiras em dois concursos promovidos pela Revista Caras em parceria com o banco HSBC e outro pelo escrit�rio de design Goff. Em 2014, o TripAdvisor, considerado o maior site de viagens do mundo, elegeu o Teatro Amazonas a terceira melhor atra��o tur�stica do Brasil.'
      : 'Teatro Amazonas is one of the most important theaters in Brazil and the main postcard of the city of Manaus. Located in Largo de S�o Sebasti�o, in the Historic Center, it was inaugurated in 1896 to meet the desire of the Amazonian elite at the time, who idealized the city to be on par with the great cultural centers. It is widely regarded as one of the most beautiful theaters in the world. With a Renaissance style surrounding its external structure with unique details on its dome, it became one of the best-known monuments in Brazil and, consequently, the greatest cultural symbol of Manaus, and one of the architectural expressions responsible for the fame of the city of Paris in the 20th century. Tropics. As it is a unique work in the country and represents the heyday of Manaus during the rubber boom, it was listed as a National Historic Landmark by IPHAN in 1966. It is located more precisely on Avenida Eduardo Ribeiro and receives around 288,000 visitors a year. With a very noble decoration, the Teatro Amazonas has been the stage not only of great theater plays, but also of international concerts such as the band The White Stripes. Since 1997, the Amazonas Opera Festival has been held in the theater. In 2008, the theater was elected one of the seven Brazilian wonders in two contests promoted by Revista Caras in partnership with HSBC bank and another by the design office Goff. In 2014, TripAdvisor, considered the largest travel site in the world, elected Teatro Amazonas the third best tourist attraction in Brazil.',
    };
    
    for (var palavra in traducao) {
      texto = texto.replace(new RegExp(palavra, 'gi'), traducao[palavra]);
    }
    
    paragrafo.innerText = texto;
  }


// Traduzir para o portugues
function traduzirParaPortugues() {
    var paragrafo = document.querySelector('.geral');
    var texto = paragrafo.innerText;
    
    
    var traducao = {
        'Teatro Amazonas is one of the most important theaters in Brazil and the main postcard of the city of Manaus. Located in Largo de S�o Sebasti�o, in the Historic Center, it was inaugurated in 1896 to meet the desire of the Amazonian elite at the time, who idealized the city to be on par with the great cultural centers. It is widely regarded as one of the most beautiful theaters in the world. With a Renaissance style surrounding its external structure with unique details on its dome, it became one of the best-known monuments in Brazil and, consequently, the greatest cultural symbol of Manaus, and one of the architectural expressions responsible for the fame of the city of Paris in the 20th century. Tropics. As it is a unique work in the country and represents the heyday of Manaus during the rubber boom, it was listed as a National Historic Landmark by IPHAN in 1966. It is located more precisely on Avenida Eduardo Ribeiro and receives around 288,000 visitors a year. With a very noble decoration, the Teatro Amazonas has been the stage not only of great theater plays, but also of international concerts such as the band The White Stripes. Since 1997, the Amazonas Opera Festival has been held in the theater. In 2008, the theater was elected one of the seven Brazilian wonders in two contests promoted by Revista Caras in partnership with HSBC bank and another by the design office Goff. In 2014, TripAdvisor, considered the largest travel site in the world, elected Teatro Amazonas the third best tourist attraction in Brazil.'
        : 'O Teatro Amazonas � um dos mais importantes teatros do Brasil e o principal cart�o-postal da cidade de Manaus. Localizado no Largo de S�o Sebasti�o, no Centro Hist�rico, foi inaugurado em 1896 para atender ao desejo da elite amazonense da �poca, que idealizava a cidade � altura dos grandes centros culturais. � amplamente considerado como um dos mais belos teatros do mundo. De estilo renascentista entorno de sua estrutura externa com os detalhes �nicos na sua c�pula, tornou-se um dos monumentos mais conhecidos do Brasil e, consequentemente, o maior s�mbolo cultural de Manaus, e uma das express�es arquitet�nicas respons�veis pela fama da cidade de Paris dos Tr�picos. Por ser uma obra singular no pa�s e representar o apogeu de Manaus durante o ciclo da borracha, foi tombado como Patrim�nio Hist�rico Nacional pelo IPHAN em 1966. Est� localizado mais precisamente na Avenida Eduardo Ribeiro e recebe cerca de 288 mil visitantes ao ano. Com uma decora��o muito nobre, o Teatro Amazonas j� foi palco n�o somente de grandes pe�as teatrais, mas tamb�m de shows internacionais como o da banda The White Stripes. Desde 1997, o Festival Amazonas de �pera � realizado no teatro. Em 2008, o teatro foi eleito uma das sete maravilhas brasileiras em dois concursos promovidos pela Revista Caras em parceria com o banco HSBC e outro pelo escrit�rio de design Goff. Em 2014, o TripAdvisor, considerado o maior site de viagens do mundo, elegeu o Teatro Amazonas a terceira melhor atra��o tur�stica do Brasil.',
    };
    
    for (var palavra in traducao) {
      texto = texto.replace(new RegExp(palavra, 'gi'), traducao[palavra]);
    }
    
    paragrafo.innerText = texto;
}