<script type="">
        var result = prompt (Enter the percentage:)
        switch (result) {
            case ("<=90%"):
                document.write("Distinction");
                break;
                case (">=80% - <90%"):
                document.write("First class");
                break;
                case (">=70% - <80%"):
                    document.write("Second class");
                    break;
                    case (">=60% - <70%")
                    document.write("Pass");
                    break;
                
            default:
            document.write("Fail")
                break;
        }
    </script>