<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pizza Laden</title>
    <link rel="stylesheet" href="style.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<main>
<div class="container">
    <header>
        <h1>Andrés Pizza Laden</h1>
    </header>
    <div class="bestellfenster">
    <div class="Überschrift"><h2>Ihre Bestellung:</h2></div>
    <div class="bestellung">
        <select name="Pizza Sorten" id="pizza-sorten" form="pizzasorten">
            <option value="Pizza 1">Pizza 1</option>
            <option value="Pizza 2">Pizza 2</option>
            <option value="Pizza 3">Pizza 3</option>
            <option value="Pizza 4">Pizza 4</option>
            <option value="Pizza 5">Pizza 5</option>
            <option value="Pizza 6">Pizza 6</option>
            <option value="Pizza 7">Pizza 7</option>
            <option value="Pizza 8">Pizza 8</option>
            <option value="Pizza 9">Pizza 9</option>
            <option value="Pizza 10">Pizza 10</option>
        </select><br><br>
        <div class="extras">
            <input type="checkbox" name="extra Käse" value="HTML">
            <label for="extra Käse"><p>extra Käse</p></label>
            <input type="checkbox" name="extra scharf" value="HTML">
            <label for="extra Käse"><p>extra scharf</p></label>
            <input type="checkbox" name="extra groß" value="HTML">
            <label for="extra Käse"><p>extra groß</p></label>
            <input type="checkbox" name="vegan" value="HTML">
            <label for="extra Käse"><p>vegan</p></label>
            <input type="checkbox" name="Gluten-frei" value="HTML">
            <label for="extra Käse"><p>Gluten-frei</p></label><br>
            <input type="checkbox" name="geschmacksneutral" value="HTML">
            <label for="extra Käse"><p>geschmacksneutral</p></label>
        </div>
    </div>
    <div class="überschrift"><h2>Adressformular:</h2></div>
    <div class="formular">
        <form action="" method="">
            <input type="radio" name="anrede" value="w"> <p>Frau</p>
            <input type="radio" name="anrede" value="m"> <p>Herr</p>
            <input type="radio" name="anrede" value="k"> <p>keine Angabe<br><br>
        <!-- <label for="anrede"> <p>Vorname</p></label>-->
            <input type="text" name="vorname" value="" size="20" maxlength="30" placeholder="Vorname:">
           <!-- <label for="anrede"> <p>Nachname</p></label>-->
            <input type="text" name="nachname" value="" size="20" maxlength="30" placeholder="Nachname:">
            <!--<label for="anrede"> <p>Straße</p></label>-->
            <input type="text" name="adresse" value="" size="20" maxlength="30" placeholder="Straße:">
           <!-- <label for="anrede"> <p>Hausnummer</p></label>-->
            <select name="Hausnummer" id="Hausnummer" form="hausnummer">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

        </form><br><br>
        <section class="button">
            <button type="submit" class="btn btn-send"><p>Absenden</p></button>
            <button type="reset" class="btn btn-send"><p>Reset</p></button>
       </section>

    </div>
    </div>
</div>
</main>
</body>
</html>