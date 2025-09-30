package in.akash.authify.io;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthResposne {

    private String email;
    private String  token;
}
