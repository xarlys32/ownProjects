========================= STARTING
-> Load Beans
1º SpringSecurityConfig configure(AuthenticationManagerBuilder auth)
2º						AuthenticationManager authenticationManager()
3º SpringSecurityConfig configure(AuthenticationManagerBuilder auth)
4º AutorizationServerConfig  JwtTokenStore tokenStore()
5º AutorizationServerConfig JwtAccessTokenConverter accessTokenConverter()

-> Configure security
6º AutorizationServerConfig configure(AuthorizationServerEndpointsConfigurer endpoints)
7º AutorizationServerConfig configure(ClientDetailsServiceConfigurer clients)
8º AutorizationServerConfig configure(AuthorizationServerSecurityConfigurer security)
9º ResourceServerConfig configure(ResourceServerSecurityConfigurer resources)
10º ResourceServerConfig configure(HttpSecurity http)
11º SpringSecurityConfig AuthenticationManager authenticationManager()

============================ FINISH STARTING

============================= LOGIN
UserDetailsImpl UserDetails loadUserByUsername(String username)
