import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {
   
    test('debe de renderizarse correctamente', () => {
       
        const wrapper = shallow( <GifExpertApp /> );

        expect( wrapper ).toMatchSnapshot();
        
        
        
    });
    

    test('debe de mostrar una lista de categorias', () => {
       
        const categories = ['Shippuden', 'Demon Slayer', 'Promised Neverland'];

        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
        
        
        
    });
    
    
    
    
});
