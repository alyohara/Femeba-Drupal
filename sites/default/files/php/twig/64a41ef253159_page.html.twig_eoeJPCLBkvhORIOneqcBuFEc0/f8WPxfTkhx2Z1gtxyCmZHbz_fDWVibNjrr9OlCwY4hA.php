<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/contrib/zeropoint/templates/layout/page.html.twig */
class __TwigTemplate_79402a8f1337e51e3bf79fa98e9d6920 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 57
        echo "<div id=\"pgwp\">
<div id=\"top_bg\">
<div class=\"sizer0 clearfix\"";
        // line 59
        if (($context["wrapper"] ?? null)) {
            echo " style=\"max-width: ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["wrapper"] ?? null), 59, $this->source), "html", null, true);
            echo "\"";
        }
        echo ">
<div id=\"top_left\">
<div id=\"top_right\">
<div id=\"headimg\">

<header id=\"header\" class=\"clearfix\">
";
        // line 65
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topreg", [], "any", false, false, true, 65)) {
            // line 66
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "topreg", [], "any", false, false, true, 66), 66, $this->source), "html", null, true);
            echo "
";
        }
        // line 68
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 68)) {
            // line 69
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 69), 69, $this->source), "html", null, true);
            echo "
";
        }
        // line 71
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 71)) {
            // line 72
            echo "<div id=\"menu\">
<div class=\"menuband clearfix\">
  ";
            // line 74
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 74), 74, $this->source), "html", null, true);
            echo "
</div>
</div>
";
        }
        // line 78
        echo "</header>

</div></div></div></div></div><!-- Header -->

<div id=\"body_bg\">
<div class=\"sizer0 clearfix\"";
        // line 83
        if (($context["wrapper"] ?? null)) {
            echo " style=\"max-width: ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["wrapper"] ?? null), 83, $this->source), "html", null, true);
            echo "\"";
        }
        echo ">
<div id=\"body_left\">
<div id=\"body_right\" class=\"clearfix\">

";
        // line 87
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 87)) {
            // line 88
            echo "<div id=\"submenu\" aria-label=\"Submenu\">
  ";
            // line 89
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 89), 89, $this->source), "html", null, true);
            echo "
</div>
";
        }
        // line 92
        echo "
<div class=\"clearfix\">
";
        // line 94
        if (($context["breadcrumb_display"] ?? null)) {
            // line 95
            echo "<div id=\"breadcrumb\" class=\"clearfix\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 95), 95, $this->source), "html", null, true);
            echo "</div>
";
        }
        // line 97
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["devlk"] ?? null), 97, $this->source));
        echo "
</div>

";
        // line 100
        if (($context["slideshow_display"] ?? null)) {
            // line 101
            if ((($context["is_front"] ?? null) || ($context["slideshow_all"] ?? null))) {
                // line 102
                $this->loadTemplate("@zeropoint/includes/slider.html.twig", "themes/contrib/zeropoint/templates/layout/page.html.twig", 102)->display($context);
            }
        }
        // line 105
        echo "
";
        // line 106
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user1", [], "any", false, false, true, 106) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user2", [], "any", false, false, true, 106)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user3", [], "any", false, false, true, 106)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user4", [], "any", false, false, true, 106))) {
            // line 107
            echo "<div id=\"section1\" class=\"sections pure-g\">
";
            // line 108
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user1", [], "any", false, false, true, 108)) {
                echo "<div class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["section_class_1"] ?? null), 108, $this->source), "html", null, true);
                echo "\"><div class=\"u1\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user1", [], "any", false, false, true, 108), 108, $this->source), "html", null, true);
                echo "</div></div>";
            }
            // line 109
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user2", [], "any", false, false, true, 109)) {
                echo "<div class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["section_class_1"] ?? null), 109, $this->source), "html", null, true);
                echo "\"><div class=\"u2 ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["divider"] ?? null), 109, $this->source), "html", null, true);
                echo "\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user2", [], "any", false, false, true, 109), 109, $this->source), "html", null, true);
                echo "</div></div>";
            }
            // line 110
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user3", [], "any", false, false, true, 110)) {
                echo "<div class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["section_class_1"] ?? null), 110, $this->source), "html", null, true);
                echo "\"><div class=\"u3 ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["divider"] ?? null), 110, $this->source), "html", null, true);
                echo "\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user3", [], "any", false, false, true, 110), 110, $this->source), "html", null, true);
                echo "</div></div>";
            }
            // line 111
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user4", [], "any", false, false, true, 111)) {
                echo "<div class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["section_class_1"] ?? null), 111, $this->source), "html", null, true);
                echo "\"><div class=\"u4 ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["divider"] ?? null), 111, $this->source), "html", null, true);
                echo "\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user4", [], "any", false, false, true, 111), 111, $this->source), "html", null, true);
                echo "</div></div>";
            }
            // line 112
            echo "</div>
";
        }
        // line 114
        echo "
<div id=\"middlecontainer\" class=\"pure-g\">

";
        // line 117
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 117)) {
            // line 118
            echo "<div class=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["first_width"] ?? null), 118, $this->source), "html", null, true);
            echo "\">
  <aside id=\"sidebar-left\">";
            // line 119
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 119), 119, $this->source), "html", null, true);
            echo "</aside>
</div>
";
        }
        // line 122
        echo "
  <div class=\"";
        // line 123
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["cont_class"] ?? null), 123, $this->source), "html", null, true);
        echo "\">
    <main id=\"main\">
      ";
        // line 125
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 125)) {
            // line 126
            echo "        <div id=\"mission\"><div class=\"clearfix\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 126), 126, $this->source), "html", null, true);
            echo "</div></div>
      ";
        }
        // line 128
        echo "      ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 128), 128, $this->source), "html", null, true);
        echo "
      <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 130
        echo "      <div class=\"layout-content\">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 130), 130, $this->source), "html", null, true);
        echo "</div>";
        // line 131
        echo "    </main>
  </div>

";
        // line 134
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 134)) {
            // line 135
            echo "<div class=\"";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["second_width"] ?? null), 135, $this->source), "html", null, true);
            echo "\">
  <aside id=\"sidebar-right\">";
            // line 136
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 136), 136, $this->source), "html", null, true);
            echo "</aside>
</div>
";
        }
        // line 139
        echo "
</div>

";
        // line 142
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user5", [], "any", false, false, true, 142) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user6", [], "any", false, false, true, 142)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user7", [], "any", false, false, true, 142)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user8", [], "any", false, false, true, 142))) {
            // line 143
            echo "<div id=\"section2\" class=\"sections pure-g\">
";
            // line 144
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user5", [], "any", false, false, true, 144)) {
                echo "<div class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["section_class_2"] ?? null), 144, $this->source), "html", null, true);
                echo "\"><div class=\"u5\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user5", [], "any", false, false, true, 144), 144, $this->source), "html", null, true);
                echo "</div></div>";
            }
            // line 145
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user6", [], "any", false, false, true, 145)) {
                echo "<div class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["section_class_2"] ?? null), 145, $this->source), "html", null, true);
                echo "\"><div class=\"u6 ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["divider"] ?? null), 145, $this->source), "html", null, true);
                echo "\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user6", [], "any", false, false, true, 145), 145, $this->source), "html", null, true);
                echo "</div></div>";
            }
            // line 146
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user7", [], "any", false, false, true, 146)) {
                echo "<div class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["section_class_2"] ?? null), 146, $this->source), "html", null, true);
                echo "\"><div class=\"u7 ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["divider"] ?? null), 146, $this->source), "html", null, true);
                echo "\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user7", [], "any", false, false, true, 146), 146, $this->source), "html", null, true);
                echo "</div></div>";
            }
            // line 147
            if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user8", [], "any", false, false, true, 147)) {
                echo "<div class=\"";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["section_class_2"] ?? null), 147, $this->source), "html", null, true);
                echo "\"><div class=\"u8 ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["divider"] ?? null), 147, $this->source), "html", null, true);
                echo "\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "user8", [], "any", false, false, true, 147), 147, $this->source), "html", null, true);
                echo "</div></div>";
            }
            // line 148
            echo "</div>
";
        }
        // line 150
        echo "
";
        // line 151
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "tertiary_menu", [], "any", false, false, true, 151)) {
            // line 152
            echo "<div id=\"menu2\">
  ";
            // line 153
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "tertiary_menu", [], "any", false, false, true, 153), 153, $this->source), "html", null, true);
            echo "
</div>
";
        }
        // line 156
        echo "
</div></div></div></div><!-- Middle page -->

<div id=\"bottom_bg\">
<div class=\"sizer0 clearfix\"";
        // line 160
        if (($context["wrapper"] ?? null)) {
            echo " style=\"max-width: ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["wrapper"] ?? null), 160, $this->source), "html", null, true);
            echo "\"";
        }
        echo ">
<div id=\"bottom_left\">
<div id=\"bottom_right\">

<div id=\"footer\" class=\"pure-g\" role=\"contentinfo\">
<div class=\"pure-u-1 pure-u-md-1-5\">
";
        // line 166
        if (($context["social_links_display"] ?? null)) {
            // line 167
            $this->loadTemplate("@zeropoint/includes/social_links.html.twig", "themes/contrib/zeropoint/templates/layout/page.html.twig", 167)->display($context);
        }
        // line 169
        echo "</div>
<div class=\"pure-u-1 pure-u-md-3-5\">";
        // line 170
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 170)) {
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer", [], "any", false, false, true, 170), 170, $this->source), "html", null, true);
        }
        echo "</div>
<div class=\"pure-u-1 pure-u-md-1-5\"></div>
</div>

<div id=\"brand\"></div>

</div></div></div></div></div>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/zeropoint/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  344 => 170,  341 => 169,  338 => 167,  336 => 166,  323 => 160,  317 => 156,  311 => 153,  308 => 152,  306 => 151,  303 => 150,  299 => 148,  289 => 147,  279 => 146,  269 => 145,  261 => 144,  258 => 143,  256 => 142,  251 => 139,  245 => 136,  240 => 135,  238 => 134,  233 => 131,  229 => 130,  224 => 128,  218 => 126,  216 => 125,  211 => 123,  208 => 122,  202 => 119,  197 => 118,  195 => 117,  190 => 114,  186 => 112,  176 => 111,  166 => 110,  156 => 109,  148 => 108,  145 => 107,  143 => 106,  140 => 105,  136 => 102,  134 => 101,  132 => 100,  126 => 97,  120 => 95,  118 => 94,  114 => 92,  108 => 89,  105 => 88,  103 => 87,  92 => 83,  85 => 78,  78 => 74,  74 => 72,  72 => 71,  66 => 69,  64 => 68,  58 => 66,  56 => 65,  43 => 59,  39 => 57,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/zeropoint/templates/layout/page.html.twig", "C:\\xampp\\htdocs\\drupal\\themes\\contrib\\zeropoint\\templates\\layout\\page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 59, "include" => 102);
        static $filters = array("escape" => 59, "raw" => 97);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'include'],
                ['escape', 'raw'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
