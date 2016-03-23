Author.destroy_all
Author.create(:name => 'D.H. Lawerence', :nationality => 'British', :dob => '1885/09/11',
 :genre => 'Modernism', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/D_H_Lawrence_passport_photograph.jpg/500px-D_H_Lawrence_passport_photograph.jpg')

Book.destroy_all
Book.create(:title => 'Sons and Lovers', :author => 'D.H. Lawerence',
:publisher=> 'Gerald Duckworth and Company Ltd', :published => '1913/04/20',
:subject=> 'Fiction', :pages=> '423',
:image => 'https://upload.wikimedia.org/wikipedia/en/9/92/Sonslovers.jpg')
