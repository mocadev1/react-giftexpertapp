import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {
   
    const category = 'Nezuko chan';


    test('debe de renderizarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid  category={ category } /> );

        expect(wrapper).toMatchSnapshot();
        
    });
    

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/some/thing.jp',
            title: 'Un titulo de test'
        },
        {
            id: 'ABC',
            url: 'https://localhost/some/thing.jp',
            title: 'Un titulo de test'
        }];
        
        
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category} /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

        console.log(gifs.length);
        
    });

    // test('debe de contener a lo menos un <GifGridItem />', () => {
        
    // });
    
    
    
    
    
    
});
