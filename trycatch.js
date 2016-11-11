function func() {
    try {
        return 1;
    } finally {
        alert( 'Вызов завершён' );
    }
}

alert( func() ); 