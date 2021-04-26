import { shallow } from "enzyme"


import GifGridItem from "../../components/GifGridItem"


describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Un titulo de test';
    const url = 'https://localhost/imagen.jpg';
    
    const img = {
        title,
        url
    }

    const wrapper = shallow(<GifGridItem { ...img } />);
    
    // beforeEach( () => {
    //     wrapper = shallow( <GifGridItem { ...img } />);
    // });
    

    test('debe de renderizar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
        
    });

    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        
        expect( img.prop('alt') ).toBe(title);
        expect( img.prop('src') ).toBe(url);
        
    });

    test('debe de tener la clase animate__fadeIn', () => {

        const div = wrapper.find('div');

        expect( div.prop('className') ).toContain('animate__fadeIn');
    })
    
    
    
    
})