function navegarEntrePaginas(url: string): void{
    window.location.href = url;
}

function goToPage2(): void{
    navegarEntrePaginas("themes.html");
}

function goToPage3(): void{
    navegarEntrePaginas("ready.html");
}

function goToPage4(): void{
    navegarEntrePaginas("game.html");
}