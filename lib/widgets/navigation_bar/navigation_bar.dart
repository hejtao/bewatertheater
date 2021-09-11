import 'package:flutter/material.dart';

class NavigationBar extends StatelessWidget {
  // NavigationBar(this.size);
  // final size;

  @override
  Widget build(BuildContext context) {
    final ctxWidth = MediaQuery.of(context).size.width;
    final ctxHeight = MediaQuery.of(context).size.height + kToolbarHeight;
    bool isMobile = false;
    if (ctxWidth < ctxHeight) {
      isMobile = true;
    }
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Container(
            margin: EdgeInsets.only(left: 20.0),
            height: 33,
            width: 33,
            decoration: BoxDecoration(
                shape: BoxShape.circle,
                image: const DecorationImage(
                  fit: BoxFit.fill,
                  image: AssetImage('assets/images/logo.png'),
                )),
          ),
          const Text(
            'Be Water Theater',
            style: TextStyle(
              color: Colors.white,
              fontFamily: 'Meadow',
              fontSize: 26,
              fontWeight: FontWeight.w300,
            ),
          ),
          Container(
            margin: EdgeInsets.only(right: 20.0),
            child: isMobile
                ? PopupMenuButton(
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10)),
                    offset: Offset(1000, kToolbarHeight),
                    color: Color.fromRGBO(0, 0, 0, 0.6),
                    icon: Icon(Icons.menu_rounded, color: Colors.white),
                    iconSize: 22,
                    itemBuilder: (BuildContext context) => <PopupMenuEntry>[
                      PopupMenuItem(
                        child: Text(
                          'Episode',
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                      PopupMenuItem(
                        onTap: null,
                        child: Text(
                          'Abount',
                          style: TextStyle(color: Colors.white),
                        ),
                      ),
                    ],
                  )
                : Row(
                    children: [
                      TextButton(
                          onPressed: () {},
                          child: Text('Episode',
                              style: TextStyle(color: Colors.white))),
                      TextButton(
                          onPressed: () {},
                          child: Text('About',
                              style: TextStyle(color: Colors.white)))
                    ],
                  ),
          )
        ],
      ),
    );
  }
}
