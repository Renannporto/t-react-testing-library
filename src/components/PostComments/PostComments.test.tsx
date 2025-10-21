import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from './index';

describe('Testes para o componente PostComments', () => {
    it('Deve adicionar dois comentários à lista', () => {
        render(<PostComments />);

        const textarea = screen.getByTestId('comment-textarea');
        const button = screen.getByTestId('comment-button');

        // Primeiro comentário
        fireEvent.change(textarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(button);

        // Segundo comentário
        fireEvent.change(textarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(button);

        // Seleciona todos os itens da lista
        const commentItems = screen.getAllByTestId('comment-item');

        // Verifica se há exatamente dois comentários
        expect(commentItems).toHaveLength(2);

        // Verifica o conteúdo dos comentários
        expect(commentItems[0]).toHaveTextContent('Primeiro comentário');
        expect(commentItems[1]).toHaveTextContent('Segundo comentário');
    });
});
